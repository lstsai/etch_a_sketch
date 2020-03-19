function createGrid(num)
{
	for(let i=0; i<num*num; i++)
	{
		const cell= document.createElement('div');
		cell.classList.add('gridcell');
		cell.style.width=(100/num)+'%';
		cell.style.height=(100/num)+'%';
		cell.style.float='left';
		cell.style.backgroundColor='white'
		cont.appendChild(cell);
	}
}
function colorIn(){
	if(this.style.backgroundColor=='white')
	{
		if(color=='rainbow')
		{
			this.style.backgroundColor=rainbow[colortrack];
			colortrack++;
			if(colortrack>=6)
				colortrack=0;
		}
		if(color=='pastel')
		{
			this.style.backgroundColor=pastel[colortrack];
			colortrack++;
			if(colortrack>=5)
				colortrack=0;
		}
		else
			this.style.backgroundColor=color;
	}
}
function reset()
{
	allCells.forEach((div)=>{div.style.backgroundColor='white';})
}
function colorChange(){
	color=this.id;
	colortrack=0;
}

const button= document.querySelectorAll('button');
button.forEach((button)=>{
	button.style.width='100px';
	button.style.height='30px';
	button.style.borderRadius='20px';
	button.style.marginBottom='30px';});
const cbutton=document.querySelector('#clear');
cbutton.addEventListener('click', reset);
const buttondiv=document.querySelector('#clearbutton');
buttondiv.style.width='100px';
buttondiv.style.margin='auto';

var color='black';//default

const colors= document.querySelectorAll('.colors button');
const rainbow=['red', '#ff7700', 'yellow', '#21c429','#0a19f5', '#6b0dbd'];
const pastel=['#7c9ccb', '#a5bcde', '#dbe5f1', '#fedcdd', '#ffb3b7'];

var colortrack=0;
colors.forEach((button)=>{button.addEventListener('click', colorChange)});


const cont=document.getElementById('container');
cont.style.margin='auto';
do{
	var number=prompt("Please enter the width of grid:");
}while(isNaN(number));
createGrid(number);

const allCells= document.querySelectorAll('.gridcell');
allCells.forEach((div)=>{div.addEventListener('mouseover', colorIn)});