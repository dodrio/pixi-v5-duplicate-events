import * as PIXI from 'pixi.js-legacy'

var app = new PIXI.Application(800, 600, {
  backgroundColor: 0x1099bb,
  forceCanvas: true,
})
document.body.appendChild(app.view)

const sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
sprite.tint = 0xfff000
sprite.width = app.screen.width
sprite.height = app.screen.height
sprite.interactive = true
sprite.on('pointerup', function() {
  console.log('pointerup')
})
app.stage.addChild(sprite)
