<?php include_once('head.php'); ?>
<?php include_once('nav.php'); ?>

    <?php $_GET['name'] ?>

    <main class="container">
        <div class="row">
            <div class="col">


                <?php 
                if (isset($_GET) && !empty($_GET['name'])) {
                    echo "<h2 class=\"text-center\">welcome back," . $_GET["name"] . "</h2>"
                }

                <h1>This is home page.</h1>
                <?php if( isset($_GET) && !empty($_GET['name']) ) {?>
                <h2>welcome back, <?php echo $_GET['name'] ?></h2>
                <?php } ?>
            </div>
        </div>
    </main>
    
<?php include_once('footer.php'); ?>