export default function HelloWorld(){

    const propUserCarrd = {
        nama: "kela",
        nim: "988263",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <Greeting/>
            <QuoteText/>
            <UserCard 
            nama="Fikri" 
            nim="169412"
            tanggal={new Date().toLocaleDateString()}/>

        <UserCard {...propUserCarrd}/>
           <img src="public/img/ethel.jpg" alt="logo"/>
        </div>
    )

}

function Greeting(){
    return(
        <small>selamat pagiiiiiii</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}