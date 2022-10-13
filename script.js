const img = document.querySelector(".head-box img");
const userpara = document.querySelector(".user-info p");
const userinfo = document.querySelector(".user-info h1");
const userBtns = document.querySelectorAll(".info-btns i");
const randomBtn = document.querySelector(".container button");

const users = [
    {
        name: 'Maddison james',
        email: 'maddi@gmail.com',
        age: '28',
        location: 'US, california',
        phone: '75 48 254 754',
        password: 'I know I can do it',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
        name: 'Nelson park',
        email: 'nguhelon@gmail.com',
        age: '20',
        location: 'Douala, cameroon',
        phone: '01 258 014 147',
        password: 'Helon is becoming a developer',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
    {
        name: 'mark davis',
        email: 'nguhelon@gmail.com',
        age: '20',
        location: 'Douala, cameroon',
        phone: '02 145 775 869',
        password: 'aint got no password',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
        name: 'bella trix',
        email: 'nguhelon@gmail.com',
        age: '20',
        location: 'Douala, cameroon',
        phone: '00 147 852 963',
        password: 'coding is loving',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
        name: 'Kenneth david',
        email: 'dave@gmail.com',
        age: '29',
        location: 'US, new york',
        phone: '01 254 865 938',
        password: 'Programming is an art',
        img: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        name: 'Anthony Nile',
        email: 'antynile@gmail.com',
        age: '32',
        location: 'US, New jersey',
        phone: '01 254 869 358',
        password: 'Lets keep rolling',
        img: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
        name: 'Angela brook',
        email: 'angelbrook@gmail.com',
        age: '27',
        location: 'US, Alabama',
        phone: '75 247 154 759',
        password: 'I love developers',
        img: "https://randomuser.me/api/portraits/women/89.jpg",
    }
]



function randomFunction() {
    const random = Math.floor(Math.random() * users.length);
    return random;
}

console.log(randomFunction());
randomBtn.addEventListener("click", () => {
    let random = randomFunction();
    img.setAttribute("src", `${users[random].img}`);
    userpara.textContent = 'My name is';
    userinfo.textContent = `${users[random].name}`;

    userBtns.forEach((button) => {

        button.addEventListener("click", () => {
            if (button.classList.contains("name")) {
                userpara.textContent = 'My name is';
                userinfo.textContent = `${users[random].name}`;
            } else if (button.classList.contains("email")) {
                userpara.textContent = 'My email is';
                userinfo.textContent = `${users[random].email}`;
            } else if (button.classList.contains("age")) {
                userpara.textContent = 'My age is';
                userinfo.textContent = `${users[random].age}`
            } else if (button.classList.contains("location")) {
                userpara.textContent = 'I stay at';
                userinfo.textContent = `${users[random].location}`
            } else if (button.classList.contains("phone")) {
                userpara.textContent = 'My phone number is';
                userinfo.textContent = `${users[random].phone}`
            } else if (button.classList.contains("password")) {
                userpara.textContent = 'My password is';
                userinfo.textContent = `${users[random].password}`
            }
        });
    });
})