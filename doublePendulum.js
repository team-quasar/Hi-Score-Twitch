function start(){
    var Engine = Matter.Engine,
        Events = Matter.Events,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Vector = Matter.Vector,
        Common = Matter.Common,
        Svg = Matter.Svg;
    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            wireframes: false,
            background: 'transparent'
        }
    });

    Render.run(render);
    // create bounds
    // the insane sizes of the bounds are to prevent teleportation
    var upperBound = Bodies.rectangle(0, -80, 10000, 200, {
        isStatic: true,
        render:{
            fillStyle: 'red',
            strokeStyle: 'black',
            lineWidth: 3
        }
    })
    var lowerBound = Bodies.rectangle(0, 680, 10000, 200, {
        isStatic: true,
        render:{
            fillStyle: 'red',
            strokeStyle: 'black',
            lineWidth: 3
        }
    })
    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);
    var player = Bodies.polygon(200, 300, 3, 40, {
    render: {
         fillStyle: 'transparent',
         strokeStyle: 'black',
         lineWidth: 3,

    }})
    player.frictionAir = 0;
    Body.rotate(player, Math.PI)
    Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0, y: 0})
    World.add(engine.world, [player, upperBound, lowerBound])

 // add all of the bodies to the world

    document.addEventListener("keydown",function(e){
  if(e.key == 'w'){
    Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y + 40}, {x: 0, y: -.1});
  }
})
};
