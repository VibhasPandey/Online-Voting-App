import Thumbnail1 from './assets/parliament.jpeg'
import Thumbnail2 from './assets/Nagarhole_Kabini_Karnataka_India,_Leopard_September_2013.jpg'
import Candidate1 from './assets/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.webp'
import Candidate2 from './assets/Michael Jackson 2008.jpg'
import Candidate4 from './assets/Indian_National_Congress_hand_logo.svg.png'
import Candidate3 from './assets/Bharatiya_Janata_Party_logo.svg.png'
import Candidate5 from './assets/Aam_Aadmi_Party_logo_(English).svg.png'

export const elections=[
    {
        id:"e1",
        title: "Lok Sabha Election",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci turpis, accumsan nec sem eget, aliquam ornare massa. Morbi elementum, diam non egestas elementum, felis odio viverra purus, a tempor mauris magna non elit. Maecenas in eleifend massa, tincidunt dignissim mauris. Etiam euismod posuere varius. Vivamus eget nisi quis arcu rhoncus lacinia. Fusce mattis imperdiet cursus. In molestie dignissim pharetra. Donec mattis, enim in molestie laoreet, nisl lectus varius arcu, non vulputate urna nisi nec libero. Donec placerat arcu nec volutpat bibendum. Suspendisse potenti. Aenean bibendum ligula non feugiat porta. Maecenas scelerisque non nibh quis mattis. Aliquam erat volutpat. Proin sagittis maximus neque, vitae commodo urna sagittis sit amet. Nulla erat magna, malesuada in maximus maximus, viverra non leo.",
        thumbnail:Thumbnail1,
        candidates:["c1","c2","c3","c4"],
        voters:[]


    },
    {
        id:"e2",
        title: "Best Celeb Election",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci turpis, accumsan nec sem eget, aliquam ornare massa. Morbi elementum, diam non egestas elementum, felis odio viverra purus, a tempor mauris magna non elit. Maecenas in eleifend massa, tincidunt dignissim mauris. Etiam euismod posuere varius. Vivamus eget nisi quis arcu rhoncus lacinia. Fusce mattis imperdiet cursus. In molestie dignissim pharetra. Donec mattis, enim in molestie laoreet, nisl lectus varius arcu, non vulputate urna nisi nec libero. Donec placerat arcu nec volutpat bibendum. Suspendisse potenti. Aenean bibendum ligula non feugiat porta. Maecenas scelerisque non nibh quis mattis. Aliquam erat volutpat. Proin sagittis maximus neque, vitae commodo urna sagittis sit amet. Nulla erat magna, malesuada in maximus maximus, viverra non leo.",
        thumbnail:Thumbnail2,
        candidates:["c1","c2","c3","c4"],
        voters:[]


    },
]

export const candidates=[
    {
        id:"c1",
        fullName:"Cristiano Ronaldo",
        image:Candidate1,
        motto:"There is always some room for more goals!",
        voteCount:100,
        election:'e2'


    },
    {
        id:"c2",
        fullName:"Michael Jackson",
        image:Candidate2,
        motto:"I can moon walk",
        voteCount:100,
        election:'e2'


    },{
        id:"c3",
        fullName:"Bharatiya Janata Party",
        image:Candidate3,
        motto:"BJP's motto",
        voteCount:100,
        election:'e1'


    },
    {
        id:"c4",
        fullName:"Congress",
        image:Candidate4,
        motto:"Congress' motto",
        voteCount:100,
        election:'e1'


    },
    {
        id:"c5",
        fullName:"Aam Admi Party",
        image:Candidate5,
        motto:"AAP's motto",
        voteCount:100,
        election:'e1'


    },
]

export const voters=[
    {
        id:"v1",
        fullName:"Vibhas Pandey",
        email:"pandeyvibhas7@gmail.com",
        password:"IamVibhas#7",
        isAdmin:true,
        votedElections:["e1","e2"]
    },
    {
        id:"v2",
        fullName:"Vishesh",
        email:"vishu7@gmail.com",
        password:"JaiBabbaKi",
        isAdmin:false,
        votedElections:["e1","e2"]
    },
    {
        id:"v3",
        fullName:"Pushkar Dubey",
        email:"dubeyji10@gmail.com",
        password:"JaiBabbaKi",
        isAdmin:false,
        votedElections:["e1","e2"]
    },
    
]