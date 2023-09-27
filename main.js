var pulsoesquerdox = 0 
var pulsoesquerdoy = 0 
var pulsodireitox = 0 
var pulsodireitoy = 0 
var musica = ''
function preload(){
    musica = loadSound('music.mp3')
}
function setup(){
canvas = createCanvas (600 , 500 )
canvas.center()
video = createCapture(VIDEO)
video.hide ()
posenet = ml5.poseNet(video , carregarmodelo )
posenet.on('pose' , resultados)
}
function draw(){
    image(video , 0 , 0 , 600 , 500)
}
function reproduzir(){
    musica.play()
    musica.setVolume(1)
    musica.rate(1)

}
function carregarmodelo(){
    console.log('carregado')
}
function resultados(results){
 if(results.length > 0 ){
    console.log (results)
    pulsoesquerdox = results[0].pose.leftWrist.x
    pulsoesquerdoy = results[0].pose.leftWrist.y
    console.log('pulsoesquerox = ' + pulsoesquerdox + 'pulsoesqueroy = ' + pulsoesquerdoy)

    pulsodireitox = results[0].pose.rightWrist.x
    pulsodireitoy = results[0].pose.rightWrist.y
    console.log('pulsodireitox = ' + pulsodireitox + 'pulsodireitoy = ' + pulsodireitoy)
  }

}
