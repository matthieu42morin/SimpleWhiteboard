<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import type { SvelteComponent } from 'svelte';
    import { browser } from '$app/environment';
    
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    let isDrawing = false;
    let brushSize = 10;
    let eraserMode = false;
    let canvasWidth = 800;  // fallback value
    let canvasHeight = 600; // fallback value

    let drawColor = "black";
  
    onMount(() => {
      if (browser) {
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('Failed to get 2D context');
        }
        context = ctx;
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
    
        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("mousemove", draw);
      }
    });
  
    onDestroy(() => {
      if (browser) {
        window.removeEventListener("resize", resizeCanvas);
        canvas.removeEventListener("mousedown", startDrawing);
        canvas.removeEventListener("mouseup", stopDrawing);
        canvas.removeEventListener("mousemove", draw);
      }
    });
  
    function startDrawing(e: MouseEvent) {
      isDrawing = true;
      draw(e);
    }
  
    function stopDrawing() {
      isDrawing = false;
      context.beginPath();
    }
  
    function draw(e: MouseEvent) {
      if (!isDrawing) return;
      context.lineWidth = brushSize;
      context.lineCap = "round";
      context.strokeStyle = drawColor;
      
      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    function saveDrawingToFile() {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'drawing.png';
      a.click();
    }
  
    function resizeCanvas() {
      if (browser) {
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
      }
    }

    function clearCanvas() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    function setEraser() {
      eraserMode = !eraserMode;
      drawColor = eraserMode ? 'white' : 'black';
    }
  </script>
  
  <div class="absolute top-0 left-0 p-4 space-y-2 bg-off-white shadow-lg">
    <button class="px-4 py-2 text-sm font-semibold text-blue-dark bg-green-500 rounded hover:bg-green-600" on:click={saveDrawingToFile}>
      Save to File
    </button>
    <button class="px-4 py-2 text-sm font-semibold text-blue-dark bg-red-500 rounded hover:bg-red-600" on:click={clearCanvas}>
      Clear Canvas
    </button>
    <div class="space-y-1">
      <p class="text-sm font-semibold">Brush Size</p>
      <input type="range" min="1" max="100" bind:value={brushSize} class="w-full cursor-pointer" />
    </div>
    <div class="space-y-1">
      <p class="text-sm font-semibold">Brush Color</p>
      <input type="color" bind:value={drawColor} class="w-full cursor-pointer" />
    </div>
    <button class={`px-4 py-2 text-sm font-semibold rounded ${eraserMode ? 'bg-gray-500 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'} text-blue-dark`} on:click={setEraser}>
      {eraserMode ? 'Drawing Mode' : 'Eraser Mode'}
    </button>
  </div>
  <canvas bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>
  