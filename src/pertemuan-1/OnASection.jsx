export default function OnASection(){
    return (
        <div>
            <h1>Apa kata warga internet ?</h1>
            <center><h2> dengan etthel</h2></center>
            <Tanya1/>
            <Tanya2/>
            <SaranMainanEthel/>
            <TanyaJawabEthel/>

        </div>
    )
}

function Tanya1() {
    return (
        <div> <hr />
            <h2>Apa nama lengkap kucing ini?</h2>
            <p>Jawaban: Ethel the Cat</p>
        </div>
    );
}

function Tanya2() {
    return (
        <div> <hr />
            <h2>ethel suka tidur dimana?</h2>
            <p>Jawaban: bawah meja</p>
        </div>
    );
}

function SaranMainanEthel() {
    return (
        <div> <hr />
            <h2>Mainan Favorit Ethel</h2>
            <ul>
                <h4>Bola kecil yang bisa dipantulkan</h4>
                <h4>Laser pointer untuk berlari mengejar cahaya</h4>
                <h4>Perangkap tikus mainan</h4>
            </ul>
        </div>
    );
}

function TanyaJawabEthel() {
    return (
        <div> <hr />
            <h2>Tanya Jawab Seputar Ethel</h2>
            <p><strong>Q: Apa makanan favorit Ethel?</strong></p>
            <p>A: Ethel sangat menyukai ikan tuna dan makanan kucing kering.</p>
            
            <p><strong>Q: Di mana Ethel suka tidur?</strong></p>
            <p>A: Ethel suka tidur di sofa empuk atau di bawah meja di ruang tamu.</p>
            
            <p><strong>Q: Apa suara khas Ethel?</strong></p>
            <p>A: Suara khas Ethel adalah "uiiaiuiiai" saat dia bermain atau berlarian.</p>
        </div>
    );
}




