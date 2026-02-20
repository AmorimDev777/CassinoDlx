<title>Página não encontrada</title>

<div class="containerErro404">
    <div class="box404">
        <div class="content404">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>Desculpe, a página que você está procurando não existe ou foi movida</p>
            <a href="?page=home" onclick="addClassOnLink('Home')">Voltar para a página inicial</a>
        </div>
    </div>
    <div class="boxImg404">
        <img src="../images/Img404.png" alt="">
    </div>
</div>

<style>
    .headerIdx a.linkActive,
    .headerIdx a.linkActive i{
        color: white;
    }
    .headerIdx a.linkActive::before{
        width: 0;
    }
    .headerIdx .hamburguerMenu{
        display: none;
    }
</style>