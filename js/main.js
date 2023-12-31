const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
           name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        date: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
           name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        date: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
           name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        date: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
           name: "Luca Formicola",
            image: null
        },
        likes: 56,
        date: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
           name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        date: "2021-03-05"
    }
];



for (let i = 0; i < posts.length; i++) {
    const object = posts[i];

    // console.log(i, object);

    for (const key in object) {
        // console.log(object[key]);
    }


    const postsContainer = document.querySelector('.posts-list');

    postsContainer.innerHTML+= `

    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${object.author['image']}" alt="${object.author['name']}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${object.author['name']}</div>
                        <div class="post-meta__time">${object['date']}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${object['content']}</div>
            <div class="post__image">
                <img src="${object['media']}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button" href="#" data-postid="${object['id']}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${object['likes']}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    
    
    
    
    `

    

    
    
    const allButtons = document.querySelectorAll('.like-button');
    console.log(allButtons);

    allButtons.forEach(singleButton => {
        console.log(singleButton);

        singleButton.addEventListener('click', function (e) {
            e.preventDefault();

            console.log('cliccato bottone');

            if (!singleButton.classList.contains('like-button--liked')) {

                singleButton.classList.add('like-button--liked');
                
            }


            
            
        })
        
    });




  
    
   

    












}