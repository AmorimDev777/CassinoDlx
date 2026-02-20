<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="/images/Logo.png" type="image/x-icon">
</head>
<body id="bodyIdx">
    <?php
        require_once('./components/header.php');

        // Determina a página solicitada por query string, com valor padrão 'home'
        $page = $_GET['page'] ?? 'home';

        // Lista branca de páginas permitidas (evita incluir arquivos arbitrários)
        $allowedPages = ['home', 'configuracoes', 'esportes', 'cassino', 'sobre', 'deposito',
                         'patrocinados', 'patrocinadores', 'cacaNiquel', 'roleta', 'jokempo'];

        // Sanitiza o valor (apenas chars alfanuméricos, underscore e hífen)
        $page = preg_replace('/[^a-z0-9_-]/i', '', $page);

        $pagePath = __DIR__ . '/pages/' . $page . '.php';

        if (in_array($page, $allowedPages, true) && file_exists($pagePath)) {
            include $pagePath;
        } else {
            include __DIR__ . '/pages/erro.php';
        }
    ?>
    <script src="/js/script.js"></script>
</body>
</html>