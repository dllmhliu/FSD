// load window
window.onload = function windowload(){
	// get vars
	var videoContainer = document.getElementById("videoContainer");		
	var video = document.getElementById("video");
	var videosource = document.getElementById("videosource");
	
	var videoControls = document.getElementById("videoControls");
	var progressWrap = document.getElementById("progressWrap");
	var playProgress = document.getElementById("playProgress");
	var showProgress = document.getElementById("showProgress");
	
	var btn_play=document.getElementById("btn_play");
	var btn_pause=document.getElementById("btn_pause");
	var volume_Up=document.getElementById("volumeup");
	var volume_Down=document.getElementById("volumedown");
	var video_volume=document.getElementById("videovolume");
	
	var video_replay = document.getElementById("replay");
	var video_mute = document.getElementById("muteControl");
	var mute_value = document.getElementById("muteValue");
	
	
	var	like_button = document.getElementById('like_button');
	var	ublike_button = document.getElementById('unlike_button');
	
	var	like = document.getElementById('video-like');
	var unlike = document.getElementById('video-unlike');
	
	var fullScreenBtn = document.getElementById("fullScreenBtn");
	
	var fullScreenFlag = false;
	var progressFlag;

	// Create our operation object, and all our operations are on this object.
	var videoPlayer = {
		init: function(){
			video.removeAttribute("controls");
			bindEvent(video, "loadeddata", videoPlayer.initControls);
			videoPlayer.operateControls();
			
			video.volume = 0.5;
			video_volume.innerText = video.volume*10;
			mute_value.innerText ="Mute";
			$('#btn_pause').prop('disabled', true);
			$('#btn_play').prop('disabled', false);

			localStorage.setItem('like', 0);
			localStorage.setItem('unlike', 0);
			localStorage.setItem('like1', 0);
			localStorage.setItem('unlike1', 0);
			localStorage.setItem('like2', 0);
			localStorage.setItem('unlike2', 0);
			localStorage.setItem('like3', 0);
			localStorage.setItem('unlike3', 0);
			localStorage.setItem('like4', 0);
			localStorage.setItem('unlike4', 0);
			like.innerText = localStorage.getItem('like');
			unlike.innerText = localStorage.getItem('unlike');
		},
		initControls: function(){
			videoPlayer.showHideControls();
		},
		showHideControls: function(){
			bindEvent(video, "mouseover", showControls);
			bindEvent(videoControls, "mouseover", showControls);
			bindEvent(video, "mouseout", hideControls);
			bindEvent(videoControls, "mouseout", hideControls);
		},
		operateControls: function(){
			bindEvent(progressWrap, "mousedown", videoSeek);
			bindEvent(btn_play, "click", play);	
			bindEvent(btn_pause, "click", pauseVid);
			bindEvent(volume_Up, "click", volumeUp);
			bindEvent(volume_Down, "click", volumeDown);	
			bindEvent(video_replay, "click", replay);
			bindEvent(video_mute, "click", muteControl);
			bindEvent(fullScreenBtn, "click", fullScreen);
			bindEvent(like_button, "click", likeVideo);
			bindEvent(unlike_button, "click", unlikeVideo);
		}
	}

	videoPlayer.init();
	
	//play
	function play(){
		video.play();
		if(!video.paused) {
			$('#btn_play').prop('disabled', true);
			$('#btn_pause').prop('disabled', false);
			progressFlag = setInterval(getProgress, 60);
		}
	}
	 //pause
	function pauseVid()
	{
	    video.pause();
		if(video.paused ) {
			$('#btn_pause').prop('disabled', true);
			$('#btn_play').prop('disabled', false);
			clearInterval(progressFlag);
	    }
	}
	  //volumeUp
	function volumeUp()
	{
		if(video.volume<1){
			video.volume= video.volume+0.1;
			video.volume = parseFloat(video.volume).toFixed(1);
			video_volume.innerText = video.volume*10;		  
		}
	}
	//volumeDown
	function volumeDown()
	{
	    if(video.volume>0){
			video.volume= video.volume-0.1;
			video.volume = parseFloat(video.volume).toFixed(1);
			video_volume.innerText = video.volume*10;
	    }
	}
	//replay
	function replay(){
		video.currentTime = 0;
		play();
	}
	//mute/unmute
	function muteControl(){		
		if (video.muted) {
			// Unmute the media player
			video.muted = false;
			mute_value.innerText ="Mute";		
			video_volume.innerText = video.volume*10;	
		}
		else {
			// Mute the media player
			video.muted = true;	
			mute_value.innerText ="Unmute";			
			video_volume.innerText = 0;	
		}
	}
	// Click the like currently video
	function likeVideo() {
		if (videosource.title=='example0'){
			var str='like';
		}
		if (videosource.title=='example1'){
			var str='like1';
		}
		if (videosource.title=='example2'){
			var str='like2';
		}
		if (videosource.title=='example3'){
			var str='like3';
		}
		if (videosource.title=='example4'){
			var str='like4';
		}		
		var c_number = localStorage.getItem(str);
		localStorage.setItem(str, parseInt(c_number)+1);
		like.innerText = localStorage.getItem(str);	
	}

	// Click the unlike currently video
	function unlikeVideo() {
		if (videosource.title=='example0'){
			var str='unlike';
		}
		if (videosource.title=='example1'){
			var str='unlike1';
		}
		if (videosource.title=='example2'){
			var str='unlike2';
		}
		if (videosource.title=='example3'){
			var str='unlike3';
		}
		if (videosource.title=='example4'){
			var str='unlike4';
		}	
		var c_number = localStorage.getItem(str);
		localStorage.setItem(str, parseInt(c_number)+1)
		unlike.innerText = localStorage.getItem(str);
	}

	// Native JavaScript Event Binding Functions
	function bindEvent(ele, eventName, func){
		if(window.addEventListener){
			ele.addEventListener(eventName, func);
		}
		else{
			ele.attachEvent('on' + eventName, func);
		}
	}
	// Control panel displaying video
	function showControls(){
		videoControls.style.opacity = 1;
	}
	// Hidden video control panel
	function hideControls(){
		// To keep the control panel appearing, I changed the value of videoControls. style. opacity to 1.
		videoControls.style.opacity = 1;
	}

	// Controlling whether videos are full-screen or not, the forehead part is not well implemented, I will continue to study it when I have time.
	function fullScreen(){
		if(fullScreenFlag){
			videoContainer.webkitCancelFullScreen();
		}
		else{
			videoContainer.webkitRequestFullscreen();
		}
	}
	// Video playback bar
	function getProgress(){
		var percent = video.currentTime / video.duration;
		playProgress.style.width = percent * (progressWrap.offsetWidth) - 2 + "px";
		showProgress.innerHTML = (percent * 100).toFixed(1) + "%";
		//if the video is ended, disable pause button
		if(video.ended){
			$('#btn_pause').prop('disabled', true);
			$('#btn_play').prop('disabled', false); 	
		}
	}
	// The mouse is captured and processed when it clicks on the playback bar.
	function videoSeek(e){
		if(video.paused || video.ended){
			play();
			enhanceVideoSeek(e);
		}
		else{
			enhanceVideoSeek(e);
		}
	}
	function enhanceVideoSeek(e){
		clearInterval(progressFlag);
		var length = e.pageX - progressWrap.offsetLeft;
		var percent = length / progressWrap.offsetWidth;
		playProgress.style.width = percent * (progressWrap.offsetWidth) - 2 + "px";
		video.currentTime = percent * video.duration;
		progressFlag = setInterval(getProgress, 60);
	}
}
// Loads a video item into the vedio player
function loadVideo(source_src,example) {
	document.getElementById("videosource").src=source_src;
	document.getElementById("videosource").title=example;
	document.getElementById("video").load();
	document.getElementById("playProgress").style.width = 2 - 2 + "px";
	document.getElementById("showProgress").innerHTML = 0 + "%";
	$('#btn_play').prop('disabled', false);
	$('#btn_pause').prop('disabled', true);
	if(example=="example0"){
	document.getElementById("video-like").innerText = localStorage.getItem('like');
	document.getElementById("video-unlike").innerText = localStorage.getItem('unlike');
	}
	if(example=="example1"){
	document.getElementById("video-like").innerText = localStorage.getItem('like1');
	document.getElementById("video-unlike").innerText = localStorage.getItem('unlike1');
	}
	if(example=="example2"){
	document.getElementById("video-like").innerText = localStorage.getItem('like2');
	document.getElementById("video-unlike").innerText = localStorage.getItem('unlike2');
	}
	if(example=="example3"){
	document.getElementById("video-like").innerText = localStorage.getItem('like3');
	document.getElementById("video-unlike").innerText = localStorage.getItem('unlike3');
	}
	if(example=="example4"){
	document.getElementById("video-like").innerText = localStorage.getItem('like4');
	document.getElementById("video-unlike").innerText = localStorage.getItem('unlike4');
	}
}