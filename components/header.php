<header class="headerIdx">
    <span class="spanLogo">
        <img src="/images/Logo.png" alt="" class="logo" id="logoIDX">
    </span>
    <ul class="navLinks">
        <li><a href="?page=home" class="linkHeader" id="linkHeaderHome" onclick="addClassOnLink('Home')" title="Home"><i class="fa-solid fa-house navIcon"></i></a></li>
        <li><a href="?page=esportes" class="link linkHeader" id="linkHeaderEsportes" onclick="addClassOnLink('Esportes')" title="Esportes">
            <span class="letterText">Esportes</span>
            <span class="iconText" id="sportsIconHeader"><i class="fa-solid fa-futbol"></i></span>
        </a></li>
        <li><a href="?page=cassino" class="link linkHeader" id="linkHeaderCassino" onclick="addClassOnLink('Cassino')" title="Cassino">
            <span class="letterText">Cassino</span>
            <span class="iconText"><i class="fa-solid fa-dice"></i></span>
        </a></li>
        <li><a href="?page=sobre" class="link linkHeader" id="linkHeaderSobre" onclick="addClassOnLink('Sobre')" title="Sobre">
            <span class="letterText">Sobre</span>
            <span class="iconText"><i class="fa-solid fa-newspaper"></i></span>
        </a></li>
        <a href="?page=configuracoes" class="navIcon hiddenConfIcon linkHeader" id="linkHeaderConfiguracoes" onclick="addClassOnLink('Configuracoes')" title="Configurações"><i class="fa-solid fa-gear"></i></a>
    </ul>
    <span class="spanSaldo">
        <div class="boxSaldo">
            <p class="saldoUser" id="saldoUser"></p>
            <a href="?page=deposito" class="linkHeader" id="linkHeaderDeposito" onclick="addClassOnLink('Deposito')">Depósito</a>
        </div>
    </span>
    <span class="spanConf">
        <a href="?page=configuracoes" class="iconConf linkHeader" id="linkHeaderConfiguracoes" onclick="addClassOnLink('Configuracoes')" title="Configurações"><i class="fa-solid fa-gear"></i></a>
    </span>
    <span class="hamburguerMenu">
        <div></div>
        <div></div>
        <div></div>
    </span>
</header>

<script>
    let sportsIcon = document.getElementById('sportsIconHeader')
    if (!localStorage.getItem('iconeHTML')) {
        localStorage.setItem('iconeHTML', '<i class="fa-solid fa-futbol"></i>')
    }
    sportsIcon.innerHTML = localStorage.getItem('iconeHTML')
</script>