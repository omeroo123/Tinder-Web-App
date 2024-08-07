let users = [{
    profilepic : "https://images.unsplash.com/photo-1515159559764-c8990cc73657?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hobbies :[{
        icon : `<i class="ri-music-2-fill"></i>` ,
        interest : "Music"
    },{
        icon : `<i class="ri-brush-fill"></i>` ,
        interest : "Painting"
    }],
    receivedmsgs : 4,
    location : "Karachi, Pakistan",
    name : "Saima",
    age : "22",
    bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isFriend : null
},
{
    profilepic : "https://images.unsplash.com/photo-1540172777610-b15b605dd68d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic : "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hobbies :[{
        icon : `<i class="ri-music-2-fill"></i>` ,
        interest : "Music"
    },{
        icon : `<i class="ri-football-fill"></i>` ,
        interest : "Football"
    }],
    receivedmsgs : 2,
    location : "Islamabad, Pakistan",
    name : "Sara",
    age : "25",
    bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,labore et dolore magna aliqua.",
    isFriend : null
},
{
    profilepic : "https://images.unsplash.com/photo-1527164561913-76d911aa17ff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic : "https://images.unsplash.com/photo-1518157542428-1be9739022f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hobbies :[{
        icon : `<i class="ri-gamepad-fill"></i>` ,
        interest : "Gaming"
    },{
        icon : `<i class="ri-headphone-fill"></i>` ,
        interest : "Singing"
    }],
    receivedmsgs : 5,
    location : "Lahore, Pakistan",
    name : "Fiza",
    age : "24",
    bio : "Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isFriend : null
},
{
    profilepic : "https://images.unsplash.com/photo-1529218164294-0d21b06ea831?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic : "https://images.unsplash.com/photo-1445404590072-16ef9c18bd83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hobbies :[{
        icon : `<i class="ri-music-2-fill"></i>` ,
        interest : "Music"
    },{
        icon : `<i class="ri-code-line"></i>` ,
        interest : "Coding"
    }],
    receivedmsgs : 6,
    location : "Karachi, Pakistan",
    name : "Zoha",
    age : "20",
    bio : "Lorem dolor sit amet, consectetur adipiscing elit, sasaop ut labore et dolore magna aliqua.",
    isFriend : null
}

]


function select(elem){
    return(document.querySelector(elem));
    
}

let curr = 0;

function setData(index){
    select(".prflimg img").src = users[index].profilepic;
    select(".badge h5 ").textContent = users[index].receivedmsgs;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;
    select(".bio p").textContent = users[index].bio;

    let clutter = "";

    users[index].hobbies.forEach(function (hobbies) {
        clutter += `<div class=" tag flex items-center  bg-white/30 gap-3 py-1 px-3 rounded-full">
        ${hobbies.icon}
        <h3 class="text-sm tracking-tight ">${hobbies.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;

}

(function setInitial() {
    select(".mainCard img").src = users[curr].displaypic;
    select(".incomingCard img").src = users[curr+1]?.displaypic;

    setData(curr);
    curr = 2 ;
})();

let isAnimating = false ;

function changeImage() {
    if(!isAnimating){
        isAnimating = true
    let tl = gsap.timeline({

        
        onComplete: function (){
            isAnimating = false ;
        let main = select(".mainCard");
        let incoming = select(".incomingCard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingCard");

        main.classList.remove("z-[3]");
        main.classList.add("z[2]");
        gsap.set(main , {
            scale : 1,
            opacity : 1
        })    
        if(curr === users.length) curr = 0;
        select(".mainCard img").src = users[curr].displaypic;
        curr++;
        main.classList.remove("mainCard");
        incoming.classList.add("mainCard");
        main.classList.add("incomingCard");
      }
});

    tl.to(".mainCard",{
        scale : 1.1,
        opacity : 0,
        ease : Circ,
        duration : .9
    },"a")
    
    tl.from(".incomingCard",{
        scale : .9,
        opacity : 0,
        ease : Circ,
        duration : 1.1
    },"a")
  }
};


    let deny = select(".deny");
    let accept = select(".accept");
    let chatIcon = select(".chatIcon");
    

    deny.addEventListener("click", function(){
      
        changeImage();
        setData(curr-1);
        gsap.from(".details .element",{
            x : "-120%",
            stagger : 0.1,
            ease : Power4.easeInOut,
            duration : .5,
            opacity : 1
        })
    });
    accept.addEventListener("click", function(){
        changeImage();
        setData(curr-1);
        gsap.from(".details .element",{
            x : "-120%",
            stagger : 0.1,
            ease : Power4.easeInOut,
            duration : .5,
            opacity : 1
        })
    });
    chatIcon.addEventListener("click", function(){
        alert("Free nahi ho muft me itna he milega");
    });

    (function containerCreator(element) {
        document.querySelectorAll(".elements")
        .forEach(function(element){
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container` , 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);

        })
    })();