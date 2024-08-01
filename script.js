//your code here
const imgContainer = document.querySelector('.flex');
const resetBtn = document.querySelector('#reset');
const verifyBtn = document.querySelector('#verify');
const msg = document.querySelector('#para');

let selectedImgs = [];
let images = ['img1','img2','img3','img4','img5'];

function shuffle(array){
	for(let i=array.length-1; i>0; i--){
		const j = Math.floor(Math.random()*(i+1));
		[array[i],array[j]] = [array[j], array[i]];
	}
}

function renderImages(){
	imgContainer.innerHTML = '';
	selectedImgs = [];
	const duplicateImage = images[Math.floor(Math.random() * images.length)];
	const imagesToDisplay = [...images, duplicateImage];
	shuffle(imagesToDisplay);
	imagesToDisplay.forEach((imgClass, index)=>{
		const img = document.createElement('img');
		img.className = imgClass;
		img.setAttribute('data-class',imgClass);
		img.addEventListener('click',()=>handleImageClick(img));
		imgContainer.appendChild(img);
	});
	resetBtn.style.display = 'none';
	verifyBtn.style.display = 'none';
	msg.innerText = '';
}

function handleImageClick(img) {
    const imgClass = img.getAttribute('data-class');

    // Ignore double clicks on the same image
    if (selectedImages.includes(img)) return;

    selectedImages.push(img);

    // Show reset button
    resetButton.style.display = 'block';

    // Show verify button only if two different images are selected
    if (selectedImages.length === 2) {
        verifyButton.style.display = 'block';
    }

    // Reset selection if more than 2 images are clicked
    if (selectedImages.length > 2) {
        selectedImages = [img];
        verifyButton.style.display = 'none';
    }
}

function handleReset() {
    renderImages();
}

function handleVerify() {
    if (selectedImages.length !== 2) return;

    const imgClass1 = selectedImages[0].getAttribute('data-class');
    const imgClass2 = selectedImages[1].getAttribute('data-class');

    verifyButton.style.display = 'none';

    if (imgClass1 === imgClass2) {
        message.innerText = 'You are a human. Congratulations!';
    } else {
        message.innerText = 'We can\'t verify you as a human. You selected the non-identical tiles.';
    }
}

// Event listeners
resetButton.addEventListener('click', handleReset);
verifyButton.addEventListener('click', handleVerify);

// Initial render
renderImages();






