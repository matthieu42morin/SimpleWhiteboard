<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import type { SvelteComponent } from 'svelte';
    import { browser } from '$app/environment';
    import Save from '$lib/components/icons/save.svelte';
    import Delete from '$lib/components/icons/delete.svelte';
    
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
  
  <div class="flex gap-[8px] absolute top-0 left-0 p-4 space-y-2 bg-off-white hover:outline-8 hover:outline-grey-dark shadow-lg items-center justify-center">
    <!-- Save and Delete buttons -->
    <div class="flex gap-[8px]">
        <button class="px-4 py-2 w-[61px] h-[61px] rounded-full flex items-center justify-center bg-green-light hover:bg-green-dark shadow-lg" on:click={saveDrawingToFile}>
          <Save />
        </button>

        <button class="px-4 py-2 w-[61px] h-[61px] rounded-full flex items-center justify-center bg-red-light hover:bg-red-dark shadow-lg" on:click={clearCanvas}>
          <Delete />
        </button>
    </div>

    <!-- Brush Size -->
    <div class="space-y-1">
      <p class="text-sm font-semibold">Brush Size</p>
      <input type="range" min="1" max="75" bind:value={brushSize} class="w-full cursor-pointer" />
    </div>

    <!-- Brush Color -->
    <div class="space-y-1">
      <p class="text-sm font-semibold">Brush Color</p>
      <input type="color" bind:value={drawColor} class="w-full cursor-pointer" />
    </div>

    <!-- Mode -->
    <button class={`px-4 py-2 text-sm font-semibold rounded ${eraserMode ? 'bg-green-light hover:bg-green-dark' : ' bg-red-light hover:bg-red-dark'} text-black`} on:click={setEraser}>
      {eraserMode ? 'Drawing Mode' : 'Eraser Mode'}
    </button>
  </div>

  <canvas bind:this={canvas} width={canvasWidth} height={canvasHeight}></canvas>
  