export default function ArtikelDetail(){
    return (
        <div>
            <h1>Berita hari ini</h1>
           <center> <img src="public/img/ethel.jpg" alt="logo"/> </center>
            <Artikel/>
            <Isi/>
            <Biodata
            nama="ethel the cat" 
            kelamin="betina"
            tanggal={new Date().toLocaleDateString()}
            Hobi="main"/>
            <Kepribadian/>
         
          
        </div>
    )
}

function Artikel() {
    const text = "etthel the cat";
    const text2 = "uiiaiuiiai";
    return (
        <div style={{ textAlign: 'center' }}>
            <hr />
            <h1>{text.toLowerCase()}</h1>
            <p>{text2.toUpperCase()}</p>
        </div>
    );
}

function Isi() {
    return(
      <p><h3>Ethel adalah kucing yang sangat lucu dan penuh energi. Dia suka bermain dengan bola kecil dan
        berlari-lari di sekitar rumah. Meskipun sedikit nakal, Ethel selalu berhasil mencuri hati setiap orang
        yang bertemu dengannya. Dengan mata besar dan bulu yang lembut, Ethel memang tidak bisa berhenti menarik perhatian.
        Salah satu keunikan Ethel adalah suara khasnya. Ketika dia berlari-lari, Ethel sering mengeluarkan suara
                "uiiaiuiiai" yang terdengar sangat lucu. Beberapa orang bahkan percaya bahwa suara ini adalah cara Ethel
                untuk mengungkapkan kegembiraannya saat bermain.Meskipun Ethel sangat ceria dan aktif, dia juga suka beristirahat di tempat-tempat yang nyaman seperti
                di atas sofa atau di bawah meja. Ethel suka berada dekat dengan orang-orang yang dia sayangi, dan
                dia sering terlihat duduk di samping mereka dengan tatapan lembut dan penuh kasih.Ethel the cat benar-benar adalah teman yang luar biasa dan siap memberi kebahagiaan kepada siapapun yang
                berada di sekitarnya.Salah satu hal yang benar-benar menarik perhatian siapa pun yang bertemu dengan Ethel adalah cara dia berinteraksi dengan orang-orang. Ethel bukanlah kucing yang pemalu. Sebaliknya, dia sangat sosial dan suka berdekatan dengan orang yang dia percayai. Terkadang, Ethel akan melompat ke pangkuan seseorang yang sedang duduk, menggesekkan kepalanya di tangan mereka, meminta perhatian. Dia juga memiliki kebiasaan mengikut orang-orang yang dia sayangi ke mana pun mereka pergi, seolah-olah dia ingin selalu berada di dekat mereka. Kepribadiannya yang hangat dan penuh kasih membuat Ethel menjadi kucing yang sangat disayangi di rumahnya.
                Banyak orang yang datang untuk mengunjungi rumahnya sering kali terpesona dengan cara Ethel berinteraksi dengan mereka. Tidak jarang mereka merasa nyaman dan tenang hanya dengan berada di sekitar Ethel, yang seolah-olah dapat merasakan perasaan orang di sekitarnya dan merespon dengan cara yang penuh kasih. Terkadang, Ethel bahkan akan duduk di dekat seseorang yang tampak sedang stres, hanya untuk menemani mereka dengan hadirnya yang menenangkan. Suara khasnya yang lucu, "uiiai", kadang menjadi penghibur bagi mereka yang merasa cemas atau lelah.
                Ethel, meskipun tampak seperti kucing biasa, memiliki cara tersendiri untuk menyentuh hati siapa saja yang beruntung mengenalnya. Suara "uiiai" miliknya, yang terdengar setiap kali dia berlarian dengan gembira, adalah simbol dari kegembiraan yang tak terhingga. Ethel mengajarkan kita untuk menikmati hidup dengan penuh semangat, untuk berbagi kasih, dan untuk menemukan kebahagiaan dalam hal-hal kecil, seperti lari-larian di halaman atau sekadar tidur di tempat yang nyaman.
                </h3> </p> 


    )
}

function Biodata(props){
    return (
        <div> <p>
            <hr/>
            <h2>Nama: {props.nama}</h2>
            <h2>jenis kelamin: {props.kelamin}</h2>
            <h2>Tanggal lahir: {props.tanggal}</h2>
            <h2>hobi: {props.hobi}</h2>
            
            </p>
        </div>
        
    )
  
}

function Kepribadian() {
    return (
        <div>
            <h2>Cerita Ethel</h2>
            <h4>Ethel ceria, sosial, dan penyayang</h4>
            <h2>Perilaku</h2>
            <h4>Sering mengikuti pemiliknya dan suka berinteraksi dengan orang</h4>
        </div>
    );
}

    



