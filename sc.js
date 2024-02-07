var tl = gsap.timeline()

tl.from("h2",{
    y:-100,
    duration:.4,
    delay:.2
})

tl.from("a, #nav3 i",{
    y:-100,
    duration:.4,
    delay:.2,
    stagger: {
        amount:.5
    }
})

.from("h4, h3, p, button", {
    x:-100,
    opacity:0,duration:.3,stagger:.3
})

.from("h1",{
    y:-100,
    opacity:0
})
.from("img",{
    y:-30,rotate:"360deg",duration:2,opacity:0,scale:.1
})