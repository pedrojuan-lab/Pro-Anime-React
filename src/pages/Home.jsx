import Card from "../components/Card"

export default function Home() {

  return (
    <>
      <header>
        <h1>Pro Anime</h1>
        <div className="search-box">
          <input 
          type="text"
           placeholder="pesquisar anime"
          />
        
        </div>
      </header>

      <section>
        <h2>Bem-Vindo ao Pro Anime</h2>
        <p>A plataforma feita por fãs de animes.
           Explore novos titulos, acompanhe temporadas,
            encontre recomedações e fique por dentro das ultimas 
            novidades do universo anime.</p>
      </section>

      <section className="catalogo">
        <Card nome="Dragon Ball Z" img="https://i.pinimg.com/736x/b2/21/ab/b221aba85ed138e243cdd8251c79ffd8.jpg" />
        <Card nome="Attack on Titan" img="https://i.pinimg.com/1200x/fd/aa/d1/fdaad11b3d5ef645cb9548fb4ace27ad.jpg" />
        <Card nome="Jujutsu Kaisen" img="https://i.pinimg.com/736x/cf/66/47/cf664791f7388850ea8d420467f07a08.jpg" />
        <Card nome="Demon Slayer" img="https://i.pinimg.com/736x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg"/>
        <Card nome="The Fagrant Flower" img="https://i.pinimg.com/736x/22/bb/b8/22bbb81596283db1e9e66380768bf805.jpg"/>
        <Card nome="You Name" img="https://i.pinimg.com/736x/07/ce/7e/07ce7e0c11a05a2a9911bceb482475c4.jpg"/>
        <Card nome="Ponyo" img="https://i.pinimg.com/1200x/13/50/b6/1350b695bf11c1537f4bee6c20d3dd8e.jpg"/>
        <Card nome="One Piece" img="https://i.pinimg.com/736x/c1/67/52/c1675291978b4991a3f9ca43cd44ed8f.jpg"/>
        <Card nome="Chainsaw Man" img="https://i.pinimg.com/1200x/0d/be/da/0dbedaeeba6c800b92f25acc09c57aea.jpg"/>
        <Card nome="Dan Da Dan" img="https://i.pinimg.com/736x/97/8a/4b/978a4bf8077e1e989c311aa54330a91e.jpg"/>
        <Card nome="Solo Leveling" img="https://i.pinimg.com/736x/a7/72/2f/a7722f910928752d8fc105ff00f67b5f.jpg"/>
        <Card nome="Nanatsu No Taizai" img="https://i.pinimg.com/736x/e1/df/c6/e1dfc6e8f0d8344e18adfa556d773ba8.jpg"/>
        <Card nome="Hunter X Hunter" img="https://i.pinimg.com/736x/b9/ef/0a/b9ef0ae3b860fd287e907491fddd560c.jpg"/>
        <Card nome="Frieren e a Jornada para o Além" img="https://i.pinimg.com/1200x/93/88/89/9388895dd76dfc240a8e37a9143e6983.jpg"/>
        <Card nome="My hero academia" img="https://i.pinimg.com/736x/94/ea/f3/94eaf36ebaef4a16cc0931b1dcdf2f27.jpg"/>
        <Card nome="Spy X Family" img="https://i.pinimg.com/736x/b2/f8/02/b2f802fd23a7827782f2d40250b59c49.jpg"/>
        <Card nome="Mosnter" img="https://i.pinimg.com/736x/43/20/d4/4320d46ca10ec0746a8156ccd0dfe49d.jpg"/>
        <Card nome="Bleach" img="https://i.pinimg.com/736x/f1/e0/c7/f1e0c7f57ebd3836da589a31713a2ac7.jpg"/>
        <Card nome="Kaiju N.8" img="https://i.pinimg.com/736x/9f/3b/2a/9f3b2ad4da7ab7926c65487addc5b906.jpg"/>
        <Card nome="Death Note" img="https://i.pinimg.com/736x/76/10/63/761063ae03ccacb59ec6e8a2df8888f3.jpg"/>
        <Card nome="Circulo de Fogo The Black" img="https://i.pinimg.com/1200x/47/03/81/470381c1c893336151aac3852fb85016.jpg"/>
        <Card nome="Ranma 1/2" img="https://i.pinimg.com/736x/67/70/1d/67701d6b7a76374c188bef545eee2d46.jpg"/>
        <Card nome=" O Castelo Animado" img="https://i.pinimg.com/736x/ec/f5/96/ecf596b4b836dba11873a07b12381088.jpg"/> 
        <Card nome="Haikyu!!" img="https://i.pinimg.com/736x/f3/84/39/f38439787f3ea9e357d39c1ae12675c2.jpg"/>
        <Card nome="Junji Ito Collection" img="https://i.pinimg.com/736x/dd/d1/99/ddd1992887b2d797f08c7c70b2983033.jpg"/>
      </section>
    </>
  )
}