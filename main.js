function aboutMe(){
let name = prompt("What is your name??\nDont worry, it is not being recorded. You can cancel if you want.");
console.log(`Name: ${name}`);
if(name!=null){
let aboutMePara = document.getElementById("about-me-para");
let aboutMeContent = `Hi ${name}, I am Gurbaaz Singh Gill, a 1st year Computer Science Engineering student from Ludhiana, Punjab. Currently I am exploring the world of programming and development, trying to learn new things from my mentors and seniors. I am currently focusing on Android Application Development using kotlin and working on small projects to improve my skills. To sum it up, I am beginner full of enthusiasm and a long way to go!!!`;
aboutMePara.innerText = aboutMeContent;
}
}