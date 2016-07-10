export default function Posts(){
	
}
Posts.prototype.createPost = (postsArea,post)=>{
	let article = document.createElement('article');
	article.className = 'post elevation-1';
	article.innerHTML = '<img src="/images/avatar/'+post.avatar+'" alt="" class="avatar" />'+
			    		'<div class="text">'+
			        	'<h1 class="post-title">'+post.user+'</h1>'+
			        	'<p>'+post.phrases+'</p></div>';
	postsArea.insertBefore(article, postsArea.firstChild);
	postsArea.parentElement.scrollTop+=article.getBoundingClientRect().height+16;

}
Posts.prototype.checkPostsVolume = (postsArea) =>{
	let postsQuantity =  postsArea.querySelectorAll('.post').length;
	if(postsQuantity>10){
		postsArea.lastElementChild.remove();
	}
}