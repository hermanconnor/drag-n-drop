const initApp = () => {
  const dropzone = document.querySelector('.dropzone') as HTMLElement;

  const active = () => dropzone.classList.add('green-border');

  const inactive = () => dropzone.classList.remove('green-border');

  const prevents = (e: Event) => e.preventDefault();

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
    dropzone.addEventListener(eventName, prevents);
  });

  ['dragenter', 'dragover'].forEach((eventName) => {
    dropzone.addEventListener(eventName, active);
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    dropzone.addEventListener(eventName, inactive);
  });

  dropzone.addEventListener('drop', handleDrop);
};

document.addEventListener('DOMContentLoaded', initApp);

const handleDrop = (e: DragEvent) => {
  const dt = e.dataTransfer;
  const files = dt?.files;
  console.log(files);

  const fileArray = [...(files || [])];
  console.log(fileArray);
};
