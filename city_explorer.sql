-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: city_explorer
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `city_explorer`;

USE `city_explorer`;
--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudades` (
  `id_ciudad` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `id_pais` bigint(20) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  PRIMARY KEY (`id_ciudad`),
  KEY `ciudades_paises_fk` (`id_pais`),
  CONSTRAINT `ciudades_paises_FK` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,'Oviedo',1,43.3614,-5.8448),(2,'Gijón',1,43.5322,-5.6611),(3,'Avilés',1,43.5569,-5.9248),(4,'Langreo',1,43.3006,-5.6889),(5,'Mieres',1,43.2509,-5.7743),(6,'Cangas de Onís',1,43.3484,-5.1287),(7,'Llanes',1,43.4216,-4.7567),(8,'Ribadesella',1,43.4615,-5.0638),(9,'Cudillero',1,43.556,-6.1382),(10,'Luarca',1,43.5403,-6.5366);
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guias`
--

DROP TABLE IF EXISTS `guias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guias` (
  `id_guia` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_ciudad` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `capacidad` int(11) NOT NULL,
  PRIMARY KEY (`id_guia`),
  KEY `guia_ciudades_fk` (`id_ciudad`),
  CONSTRAINT `guia_ciudades_FK` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudades` (`id_ciudad`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guias`
--

LOCK TABLES `guias` WRITE;
/*!40000 ALTER TABLE `guias` DISABLE KEYS */;
INSERT INTO `guias` VALUES (1,1,'Jose María Rodriguez',12,50),(2,2,'Julia Ramirez Osvaldo',7,30),(3,3,'Albari Triana Lopez',8,40),(4,4,'Mateo Peña Naves',6,60),(5,5,'Aitana de Rosario Colombres',10,45),(6,6,'Manuela de los Arroyos González',13,35),(7,7,'Zaira Gutierrez Campos',5,75),(8,8,'Sebastian Pérez de Agravio',8,40),(9,9,'Herminia Novoa Iglesias',6,55),(10,10,'Mª Esther Pérez Fernández',9,65);
/*!40000 ALTER TABLE `guias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lugares`
--

DROP TABLE IF EXISTS `lugares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lugares` (
  `id_lugar` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `hora_apertura` time DEFAULT NULL,
  `hora_cierre` time DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `id_ciudad` bigint(20) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  PRIMARY KEY (`id_lugar`),
  KEY `lugares_ciudades_fk` (`id_ciudad`),
  CONSTRAINT `lugares_ciudades_FK` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudades` (`id_ciudad`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugares`
--

LOCK TABLES `lugares` WRITE;
/*!40000 ALTER TABLE `lugares` DISABLE KEYS */;
INSERT INTO `lugares` VALUES (1,'Catedral de Oviedo','/places/catedral_oviedo.jpg','La Santa Iglesia Basílica Catedral Metropolitana de San Salvador de Oviedo es un impresionante edificio gótico. Su historia se extiende por más de 1200 años.\n            La construcción de la catedral comenzó en el siglo VIII, durante el reinado del rey asturiano Fruela I.\n            La primera iglesia fue destruida en un incendio en el siglo XI y luego fue reconstruida en el siglo XII en estilo románico.\n            La Cámara Santa, que data del siglo IX, está declarada Patrimonio de la Humanidad por la Unesco.\n            Contiene tesoros como las cruces de la Victoria y de los Ángeles, símbolos de Asturias y Oviedo, respectivamente, así como el Arca Santa, que guarda numerosas reliquias, incluido el Santo Sudario.\n            En 2015, la Unesco incluyó la Cámara Santa como uno de los bienes individuales del Camino Primitivo en la ampliación del Camino de Santiago en España. Esta catedral es un tesoro histórico y artístico que merece ser explorado y admirado.','09:00:00','18:00:00',7,1,43.3623,-5.8451),(2,'Parque San Francisco','/places/parque_san_francisco.jpg','Parque urbano situado en el centro de la ciudad Oviedo (España). Es uno de los lugares más emblemáticos de la ciudad y uno de los mayores parques urbanos de Asturias.\n            Teniendo como origen los huertos del desaparecido Convento de San Francisco, en su interior se pueden distinguir varios paseos y avenidas: el paseo de los Álamos, el paseo del Bombé, el paseo de José Cuesta, la avenida Italia o la avenida Alemania, entre otras. Cuenta con estanque y numerosos y conocidos monumentos como la estatua de Mafalda o José Tartiere.\n            Es escenario habitual de numerosos eventos culturales y actividades.\n            Este espacio natural limpio y frondoso se ha convertido durante generaciones enteras en espacio de recreo y paseo.\n            Es un entorno seguro en donde a través de sus sendas peatonales y entre sus árboles se guardan los testimonios miles de ovetenses y visitantes, con recuerdos ligados a la osa Petra, los barquillos y los helados, los pavos reales, la fuente del caracol, el estanque de los patos o el quiosco de la música del Bombé.\n            El pavo real se ha convertido en un icono del Campo de San Francisco conviviendo con los ovetenses en una natural armonía.','00:00:00','00:00:00',0,1,43.3625,-5.854),(3,'Museo de Bellas Artes','/places/museo_bellas_artes.jpg','Es el museo más importante de Asturias. Fue inaugurado el 19 de mayo de 1980 a partir de la colección de arte propiedad de la antigua Diputación Provincial de Oviedo, ahora depende de la Consejería de Cultura del Principado de Asturias y es sufragado con fondos del Principado y del Ayuntamiento de Oviedo.\n            El Museo actualmente cuenta con una colección integrada por casi 15.000 obras, entre pintura (unas 1500), escultura, dibujo, grabado y artes industriales (unas 4.000 piezas),2​ aunque realmente dispone de una exhibición permanente de 800.\n            Contiene pinturas de artistas españoles, especialmente asturianos, y extranjeros, entre los que sobresale la pintura italiana y flamenca, así como esculturas, fotografías y objetos de vidrio y loza.\n            En 2017 la colección se ha visto notablemente enriquecida con 33 obras importantes donadas por Plácido Arango Arias.','10:30:00','20:30:00',0,1,43.3622,-5.8443),(4,'Playa de San Lorenzo','/places/playa_san_lorenzo.jpg','Está situada en pleno centro de Gijón. Con una longitud de 1550 metros y forma de concha, es una de las playas más emblemáticas del Principado de Asturias.\n            Se prolonga desde la escalera 0 (\"La Cantábrica\"), hasta la escalera número 16 en la desembocadura del río Piles. Paralela a ella discurre el Paseo del Muro de San Lorenzo, que continúa hacia el Este más allá de la propia playa con la conocida senda costera del Cervigón, un recorrido marítimo de más de 2 kilómetros que nos acerca otras playas como la de El Rinconín o la de Peñarrubia.\n            En total, la extensión del arenal asciende a 40.000 metros cuadrados en pleamar y 240.000 en bajamar.\n            El Muro, emblemático paseo marítimo, fue construido entre 1907 y 1916. Destaca la construcción de «La Escalerona».\n            Se caracteriza por una arena fina y tostada. El oleaje es moderado/fuerte y se distinguen 3 zonas de baño diferenciadas y vigiladas por socorristas: Escalerona (escalera 4), Centro (escaleras 7-8) y Piles (escalera 12)','00:00:00','00:00:00',0,2,43.5417,-5.6611),(5,'Laboral Ciudad de la Cultura','/places/ciudad_laboral.jpg',' La Universidad Laboral de Gijón es un complejo monumental con una rica historia que se remonta a su construcción en 1948 como orfelinato minero. A lo largo de los años, ha pasado por diferentes etapas y usos, desde su función inicial como residencia-escuela para huérfanos de la minería hasta convertirse en un centro educativo y cultural emblemático.\n            El edificio, que es el más grande de España y cuenta con un valor arquitectónico excepcional, ha sido testigo de importantes acontecimientos históricos, incluida la dictadura franquista en España. Esto ha generado controversia en torno a su pasado y su posible declaración como Patrimonio de la Humanidad por la UNESCO.\n            Aunque se reconoce su importancia histórica y artística, algunos argumentan que su asociación con el régimen franquista debe ser tenida en cuenta al considerar su candidatura para el Patrimonio de la Humanidad. Sin embargo, otros defienden su valor cultural y su papel en la memoria histórica de España.\n            En los últimos años, la Universidad Laboral ha sido objeto de una importante restauración y renovación, convirtiéndose en un centro de cultura, educación y ocio. A pesar de los desafíos y controversias, sigue siendo un símbolo importante en la ciudad de Gijón y en toda Asturias.','08:00:00','20:00:00',0,2,43.543,-5.6654),(6,'Jardín Botánico Atlántico','/places/jardin_botanico.jpg','Este jardín situado a dos kilómetros de Gijón ha sido el primero de su tipo en el noroeste de España al inaugurarse el 25 de abril de 2003. Tiene una extensión de 150 000 m². aunque está en proyecto su expansión hasta los 250 000 m². Dentro de todo este terreno se catalogan alrededor de 30 000 plantas de 2000 especies distintas. El jardín está dividido en cuatro entornos diferenciados, que son el entorno Cantábrico, la factoría vegetal, Jardín histórico de la Isla y el itinerario atlántico.\n            Las obras se iniciaron en diciembre de 2002 tras tres años de desarrollo del proyecto, participando en la inversión el Principado de Asturias y la Unión Europea a través del Fondo Social Europeo junto al Ayuntamiento de Gijón. Inaugurado el 25 de abril de 2003.\n            Este entorno está representado por el tejo en la zona de presentación inicial. El jardín de la isla data del siglo xix, pertenecía al industrial gijonés Florencio Valdés. En él se pueden encontrar camelias, plátanos, un estanque, laberinto de tejos, una piscina y una laguna. Destaca también por sus complejo hidráulicos como el estanque de baños y estanque de La Noria.','10:00:00','18:00:00',2.9,2,43.5216,5.6159),(7,'Parque del Muelle','/places/parque_muelle_aviles.jpg','Ha sido el parque tradicional de Avilés, desde su construcción a finales del siglo XIX hasta la década de los setenta del XX, justamente cuando se recuperó para la ciudad el parque de Ferrera.\n            Edificado sobre antiguos terrenos de marisma, es uno de los símbolos de crecimiento avilesino entre los siglos XIX y XX. El parque fue uno de los espacios ganados entonces a la mar, lo que también hizo que se desplazara el puerto, de origen medieval y situado al lado del templo de los Franciscanos, hacia la margen izquierda de la ría.\n            Un magnífico quiosco de música que ofrecía antes los conciertos festivos de la banda municipal, sirve hoy de escenario a varios festivales en verano.\n            En el extremo sur destacan la rosaleda, 12 estatuas y una preciosa fuente. Al lado opuesto, la estatua de Pedro Menéndez y el monumento a la foca, todo un emblema de la ciudad.','00:00:00','00:00:00',0,3,43.5569,-5.9281),(8,'Centro Niemeyer','/places/centro_niemeyer_aviles.jpg','El Centro Cultural Niemeyer cumple con una triple misión de enriquecimiento del patrimonio público en Avilés, Asturias.\n            Es considerada la mejor muestra de las obras realizadas en Europa por el arquitecto Oscar Niemeyer.\n            También es la pieza maestra de la renovación urbanística en curso para la ciudad de Avilés.\n            Y por último, es una infraestructura de primer nivel abierta a todo tipo de manifestaciones culturales.\n            El Centro Cultural Niemeyer tuvo un origen remoto. Tras recibir el Premio Príncipe de Asturias de las Artes en 1989, Oscar Niemeyer quiso avivar su vínculo con Asturias creando este centro cultural como conmemoración de los 25 años del premio. Así es como el 26 de marzo de 2011 fue inaugurado este edificio polivalente.\n            El Centro Cultural Niemeyer devolvió la esperanza al estar poniendo los fundamentos de un nuevo horizonte económico y cultural para la región. Además, participa en un proyecto de recuperación del espacio público de Avilés para nuevos usos. Por eso, la ubicación contribuye a la integración urbana de antiguas zonas industriales de la ría de Avilés.\n            Gracias a Niemeyer, la localidad asturiana se sitúa en la agenda de las grandes obras al servicio de la educación, la cultura y las artes. ','10:00:00','20:00:00',0,3,43.5567,-5.9248),(9,'Parque Dorado','/places/parque_dorado.jpg','El Parque Dorado, ubicado en el centro de Sama, Langreo, es un espacio emblemático construido a principios del siglo XX. Su nombre honra a Antonio María Dorado, quien lideró con determinación la construcción del parque tras una devastadora inundación en 1900, que dejó terrenos en la margen izquierda del río Nalón. Dorado transformó estos terrenos en el parque que conocemos hoy, rellenándolos con escombros de las minas.\n            El parque, el segundo más grande de Langreo después del Parque Alcalde Antonio García Lago en La Felguera, se extiende a lo largo del río Nalón y está conectado con el paseo de Los Llerones mediante puentes y una pasarela. Presenta una distribución alargada con una calle principal bordeada de árboles y zonas ajardinadas. Además de la calle principal, hay caminos más pequeños, estanques, palomares y estatuas dispersas por el parque.\n            En la parte trasera, se encuentra un minigolf recientemente construido, junto con una cancha polideportiva, mesas de ping-pong y pistas de paddle.','00:00:00','00:00:00',0,4,43.3081,-5.6994),(10,'Museo de la Minería y de la Siderurgía','/places/museo_mineria_langreo.jpg','El Museo de la Siderurgia de Asturias (MUSI), situado en La Felguera, Langreo, España, inaugurado en 2006, representa un testimonio vivo del legado industrial de la región. Fundada en 1857 por Pedro Duro, la empresa Duro y Compañía se convirtió en un importante centro siderúrgico que transformó el valle de La Felguera y generó empleo para miles de asturianos.\n            El MUSI ofrece una experiencia única que combina cultura, historia, industria y ocio. Situado en la antigua torre de refrigeración de la Fábrica de La Felguera, el museo busca mostrar al visitante el proceso de industrialización que vivieron las Cuencas Mineras asturianas.\n            Para aquellos interesados en investigar más a fondo, el museo cuenta con una sala de documentación y biblioteca. Además, ofrece un recorrido por el casco urbano de La Felguera, donde se muestra el patrimonio artístico-industrial y el llamado paternalismo industrial. Durante este recorrido, los visitantes pueden conocer una casa modelo decorada según las condiciones de las familias obreras de la época.','10:00:00','19:00:00',5,4,43.2933,-5.6871),(11,'Centro de Interpretación del Poblado Minero de Bustiello','/places/centro_interpretacion_mieres.jpg','El poblado de Bustiello constituye una excepción dentro del patrimonio industrial asturiano: un conjunto levantado entre 1890 y 1925 por la Sociedad Hullera Española, una relevante empresa minera del grupo industrial del Marqués de Comillas. Una iglesia, un monumento, un casino, una escuela, un sanatorio…y los alojamientos, para ingenieros y obreros, que responden a un cuidado plan de conjunto y un esmero estético inusuales.\n            Para descubrirlo y comprender las claves del “paternalismo industrial” que ejemplifica, el recorrido debe iniciarse en el Centro de Interpretación ubicado en uno de los antiguos chalets (la casa de Don Isidro) donde se expone ordenadamente la importancia geológica e industrial de la cuenca minera, así como la red de firmas empresariales del Marqués de Comillas y, finalmente, las características del poblado desde una perspectiva histórica, artística y patrimonial, para las que se reserva el segundo piso del edificio, desde donde se domina este singular poblado que responde al modelo de ciudad jardín.','10:30:00','18:30:00',5,5,43.1888,-5.7689),(12,'Iglesia de San Juan','/places/iglesia_san_juan.jpg','La iglesia de San Juan Bautista es el templo parroquial de la villa de Mieres del Camino, en el municipio asturiano de Mieres.\n            La iglesia de San Juan original se encontraba en el núcleo de La Guareña hasta que una riada asoló el templo en 1670. Tras esto se construyó un nuevo templo románico que estuvo en el actual emplazamiento de la parroquia en el barrio de La Pasera, hasta su derribo en 1927. Cerca de este lugar aún se encuentra el cementerio municipal de Mieres. Un miembro de la familia Rodríguez-San Pedro encontró entre los escombros restos de la portada románica a punto de perderse (perteneciente al primitivo templo de La Guareña) y la llevó a Gijón, donde se conserva en el Palacio de los Condes Rodríguez Sampedro. La festividad de San Juan se celebra cada 24 de junio.','00:00:00','00:00:00',0,5,43.2522,-5.7719),(13,'Basílica de Santa María la Real de Covadonga','/places/basilica_covadonga.jpg','La basílica de Santa María la Real es un sitio de culto católico situado en Covadonga, Principado de Asturias (España), declarado basílica menor el 11 de septiembre de 1901.\n            El templo fue ideado por Roberto Frassinelli y levantado entre 1877 y 1901 por el arquitecto Federico Aparici y Soriano, de estilo neorrománico, construido íntegramente en piedra caliza rosa.\n            En 1777 un incendio destruyó el antiguo templo, que se encontraba contiguo a la Santa Cueva donde se veneraba y se venera a la Virgen de Covadonga (La Santina), conmemorativo de la batalla de Covadonga. Igualmente ardió en su totalidad lo que contenía la cueva, que estaba completamente recubierta de madera.\n            Se decidió entonces levantar uno nuevo a modo de monumental santuario, para lo que se pidió limosna en toda España, con la oposición del cabildo, ya que los canónigos querían reconstruir el templo de la Santa Cueva y el santuario ideado por el arquitecto Ventura Rodríguez, que nunca pudo llevarse a cabo.','09:00:00','18:00:00',0,6,43.3113,-5.0726),(14,'Puente Romano','/places/puente_romano.jpg','El puente medieval de Cangas de Onís o puentón es una construcción situada sobre el río Sella a su paso por Cangas de Onís, y que separa los concejos de Cangas de Onís y de Parres, perteneciendo, por tanto, la mitad a cada concejo. Su figura está asociada al pueblo de Cangas de Onís\n            El Puentón es uno de los símbolos de Asturias. Forma parte del escudo de Cangas de Onís, junto a la cruz sobre la media luna invertida que recuerda la victoria sobre los musulmanes en la batalla de Covadonga y la leyenda Minima urbium, maxima sedium (mínima urbe, máxima sede)\n            En 1931 fue declarado Monumento Histórico Artístico. Es, por tanto, bien de interés cultural. En sus aledaños suelen ir a pescar salmones numerosos ribereños de la zona del río Sella.','00:00:00','00:00:00',0,6,43.3493,-5.1262),(15,'Playa de Toró','/places/playa_toro.jpg','La playa de Toró, conocida también como Entremís, es una playa del concejo de Llanes, Asturias. Se enmarca en las playas de la Costa Oriental de Asturias, también llamada Costa Verde Asturiana y está considerada paisaje protegido, desde el punto de vista medioambiental (por su vegetación). Por este motivo está integrada, según información del Ministerio de Agricultura, Alimentación y Medio Ambiente, en el Paisaje Protegido de la Costa Oriental de Asturias.\n            Por su espectacularidad cuenta con la certificación Q de calidad, y desde 1996 cuenta según los años con Bandera Azul, siendo el último año en la que la obtuvo 2014.','00:00:00','00:00:00',0,7,43.4191,-4.7584),(16,'Paseo de San Pedro','/places/paseo_san_pedro.jpg','En este paseo cxisten pocos elemento decorativos, algo que le confiere un tono de soledad al lugar y que nos permite extender la vista sin obstáculos. Apenas unos bancos para sentarse y unos árboles minúsculos cuyas formas pueden resultar inquietantes si el horizonte se torna negro. Se trata de una docena de frágiles tamarindos plantados en el último cuarto del siglo XIX y que hoy se aferran a la tierra y parecen alimentarse de las miradas de los visitantes.\n            Gracias a esta pasarela natural, de unos ocho metros de anchura, observamos con detalle la muralla de la ciudad medieval, con su característico torreón y las iglesias más importantes. A un lado, el pequeño puerto pesquero de la villa marinera y una peculiar perspectiva de «Los cubos de la memoria», la obra en la que Agustín Ibarrola plasmó su concepto del arte sobre la escollera del puerto.\n            Inmediatamente detrás de las casas, la imponente sierra de Cuera parece estar a dos pasos del mar con sus cimas de casi 2.000 metros de altura. Tras ella, si el tiempo lo permite, los Picos de Europa se asoman para coronar la panorámica.','00:00:00','00:00:00',0,7,43.419,-4.7559),(17,'Bufones de Pría','/places/bufones_pria.jpg','Los más conocidos de Asturias. Se debe dejar el coche y seguir caminando por los impresionantes acantilados que veremos en frente. En los días que la mar está agitada el espectáculo es sorprendente, es un lugar fantástico, las vistas desde sus acantilados merecen el viaje y si la marea es alta el espectáculo es inimaginable. Hay una ruta de los bufones, con inicio y fin en Llames, de dificultad baja y una duración de unas cuatro horas aproximadamente que merece la pena hacer para disfrutar de su belleza.\n            Se trata de la agrupación de bufones más occidental de la costa asturiana. Está integrado dentro del Paisaje Protegido de la Costa Oriental de Asturias.\n            Un bufón es una formación kárstica que consiste en un orificio vertical formado a pocos metros del borde de un acantilado de roca caliza y que inferiormente comunica con el mar. Cuando la marea sube y las olas baten con fuerza, expulsa hacia arriba un chorro de agua de mar pulverizada, lo que provoca un sonido característico que es lo que le da el nombre de bufón. La columna de agua pulverizada puede alcanzar más de diez metros de altura y el bufido oírse a varios kilómetros.','00:00:00','00:00:00',0,7,43.419,-4.7559),(18,'Ermita de la Guía','/places/ermita_guia.jpg','Es una capilla renacentista de finales del siglo XVI, aunque reformada en 1892, que acoge a la patrona de los marineros. Al edificio le falta una nave, perdida probablemente en un desprendimiento, y su elemento mejor conservado es la magnífica portada sur, en la que aún se aprecia la obra original de cantería.\n            Hubo desde el siglo XVI al XIX, junto a la capilla, una fortificación con una batería para la defensa del puerto. Los tres cañones que hoy se ven allí forman parte de la historia riosellana, pues fueron arrojados al mar por los franceses en su retirada de la villa en la guerra de la Independencia y restituidos a su emplazamiento original en 1999.\n            Ermita y batería son hoy el mejor mirador para contemplar la villa, las montañas y el mar Cantábrico.','00:00:00','00:00:00',0,8,43.4694,-5.0652),(19,'Playa de Santa Marina','/places/playa_santa_marina.jpg','Es la más importante del concejo, conocida como “La Playa de los Picos de Europa” por su proximidad al Parque Nacional, del que dista 35 kilómetros. Está enclavada junto a la desembocadura del Sella y forma una amplia concha flanqueada por dos montes, el Somos, donde está el faro, y el Corberu, que protege la entrada del puerto. Es una gran playa urbana, de arena dorada. Dotada de todos los servicios con los que puede contar una playa, tal como acredita la consecución en 2004 del distintivo Q de Calidad Turística. Ideal para el baño y la práctica del  surf,  está delimitada por el Paseo Marítimo donde destacan los preciosos chalés modernistas y al final de éste, en la parte occidental de la playa es donde están las famosas huellas de dinosaurios.\n            Servicios: servicio de salvamento, duchas, chiringuitos, fuentes, servicio de baño asistido, baños y duchas adaptados, aparcamiento, aparcamiento para personas con movilidad reducida y para  bicicletas , megafonía, sistema de recogida de quejas y sugerencias, sistema de identificación para niños perdidos. Longitud 1.200m.','00:00:00','00:00:00',0,8,43.4654,-5.0688),(20,'Pueblo Pesquero','/places/pueblo_pesquero.jpg','Con una población de casi 5000 habitantes. Durante el verano las calles de este pueblo con forma de anfiteatro romano son un hervidero de turistas.\n            Como curiosidad den 1995 Cudillero ganó la primera temporada del concurso de TVE «El Gran Prix». Existen unos pocos restos romanos muy difuminados por esta zona.\n            La fundación del pueblo y su núcleo principal se produce en el siglo XIII como un pequeño pueblo de pescadores. Este se consolidaría como puerto marítimo en el siglo XV y durante los siglos venideros se construirían los principales edificios de la villa.\n            En el siglo XIX se le entregaría la autonomía municipal a Cudillero por su importante puerto pesquero, la cual se ampliaría en el siglo XX.','00:00:00','00:00:00',0,9,43.5634,-6.1462),(21,'Cabo Vidio','/places/cabo_vidio.jpg','Se trata de uno de los cabos más importantes de Asturias, desde el que se puede divisar Estaca de Bares o el Cabo de Peñas.\n            Este cabo forma un acantilado de 80 m sobre el mar y una de sus mayores atracciones son el faro (abajo) y la iglesiona, que es una cueva formada por la erosión del oleaje y que se puede visitar en bajamar.\n            Geológicamente este cabo está formado por cuarcitas y pizarras. Dentro de la fauna cabe destacar que el acantilado es una importante zona de cría de diferentes aves marinas entre las que sobresalen el cormorán moñudo y gaviotas.\n            Al lado encontrarmos el Faro de Cabo Vidio, el último faro construido hasta la fecha en Asturias y uno de los más nuevos de España.','00:00:00','00:00:00',0,9,43.5938,-6.2432),(22,'Cementerio parroquial de Luarca','/places/cementerio_luarca.jpg','Situado en una privilegiada situación, sobre un promontorio que sirvió de baluarte defensivo de los ataques provenientes del mar, según don Jesús Evaristo Casariego pudo haber sido construida por primera vez en el siglo XIII, aunque sufrió diversas remodelaciones en siglos posteriores, especialmente en el XVIII, promovida por el obispo Rafael Tomás Menéndez de Luarca.\n            Adopta su parte derecha una posición tradicional, con el alero del tejado a dos aguas que concluye de forma regular y con un pequeño vano de medio punto que internamente ilumina una habitación anexa a la tribuna, también pintado en color gris como la puerta. Sin embargo, su parte izquierda adopta una forma semicircular que envuelve la torre.\n            Sobre la fachada se sitúa la espadaña de sillares de granito, formada por dos pilastras, molduradas a la manera toscana, una pequeña bóveda de medio punto en la que se sitúa la campana y un frontón rematado por una cruz de brazos iguales. La torre, rectangular, posee escalera de caracol, pequeños vanos y se remata con un chapitel truncado.\n            En el cementerio de Luarca se encuentran los restos mortales de Severo Ochoa de Albornoz, premio Nobel de medicina, y de su mujer Carmen. Severo Ochoa murió el 1 de noviembre de 1993.','09:30:00','18:00:00',0,10,43.5484,-6.5325),(23,'Puerto de Luarca','/places/puerto_luarca.jpg','En tiempos modernos, Luarca experimentó un período de expansión y desarrollo, marcado por la emigración a América y la llegada de indianos que invirtieron en la economía local. La construcción del primer dique en el siglo XIX y la expansión urbana en el siglo XX transformaron la fisonomía de la villa.\n            Sin embargo, la Guerra Civil Española de 1936 interrumpió este progreso, dejando un período de represión y dificultades económicas. A pesar de los desafíos, Luarca comenzó a recuperarse en las décadas de 1950 y 1960, con la creación de instituciones como la Junta Municipal y la Oficina de Turismo, y la mejora de las comunicaciones con la construcción de nuevas carreteras y la llegada del ferrocarril.\n            Hoy en día, Luarca es un destino turístico popular, conocido por su belleza natural, su patrimonio histórico y su vibrante vida cultural. El Certamen Nacional de Pintura Luarca, la industria pesquera y las cooperativas agrarias son solo algunas de las facetas que contribuyen a su vitalidad y atractivo. Luarca, con su rica historia y su espíritu de resiliencia, sigue siendo un lugar lleno de encanto y oportunidades para quienes lo visitan y lo llaman hogar.','00:00:00','00:00:00',0,10,43.5467,-6.5326);
/*!40000 ALTER TABLE `lugares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_100000_create_password_reset_tokens_table',1),(2,'2019_08_19_000000_create_failed_jobs_table',1),(3,'2019_12_14_000001_create_personal_access_tokens_table',1),(4,'2024_01_10_125237_create_sessions_table',1),(5,'2024_05_10_112519_create_ciudades_table',1),(6,'2024_05_10_112519_create_guias_table',1),(7,'2024_05_10_112519_create_lugares_table',1),(8,'2024_05_10_112519_create_paises_table',1),(9,'2024_05_10_112519_create_resenas_table',1),(10,'2024_05_10_112519_create_reservas_table',1),(11,'2024_05_10_112519_create_usuarios_table',1),(12,'2024_05_10_112522_add_foreign_keys_to_ciudades_table',1),(13,'2024_05_10_112522_add_foreign_keys_to_guias_table',1),(14,'2024_05_10_112522_add_foreign_keys_to_lugares_table',1),(15,'2024_05_10_112522_add_foreign_keys_to_resenas_table',1),(16,'2024_05_10_112522_add_foreign_keys_to_reservas_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paises`
--

DROP TABLE IF EXISTS `paises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paises` (
  `id_pais` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paises`
--

LOCK TABLES `paises` WRITE;
/*!40000 ALTER TABLE `paises` DISABLE KEYS */;
INSERT INTO `paises` VALUES (1,'España');
/*!40000 ALTER TABLE `paises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (2,'App\\Models\\User',1,'token','08a81d4fa69087e3704184980bf3727988cf33b5ff404dccd69d97c0f8d9d99d','[\"usuario-registrado\"]','2024-05-29 10:10:18',NULL,'2024-05-29 10:01:33','2024-05-29 10:10:18');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resenas`
--

DROP TABLE IF EXISTS `resenas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resenas` (
  `id_resena` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_usuario` bigint(20) NOT NULL,
  `id_lugar` bigint(20) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha` date NOT NULL,
  `valoracion` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_resena`),
  KEY `resenas_usuarios_fk` (`id_usuario`),
  KEY `resenas_lugares_fk` (`id_lugar`),
  CONSTRAINT `resenas_lugares_FK` FOREIGN KEY (`id_lugar`) REFERENCES `lugares` (`id_lugar`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `resenas_usuarios_FK` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resenas`
--

LOCK TABLES `resenas` WRITE;
/*!40000 ALTER TABLE `resenas` DISABLE KEYS */;
INSERT INTO `resenas` VALUES (1,3,8,'Et deleniti dolores quia labore sit et consequatur dignissimos voluptatem itaque vitae est veritatis cumque molestiae quae rem eveniet molestiae dolore quia voluptates quibusdam natus voluptas aliquid odit tempora aliquam ut hic dolor illum itaque voluptas cum alias consequatur quia necessitatibus repellat voluptas aut harum quaerat aut in ut dolorem consequuntur sit maxime.','2023-12-20',4),(2,6,10,'Et dolore voluptas iste labore nobis aut earum aliquid delectus est voluptatem tenetur sit ratione dignissimos ad occaecati dolorem est quod similique aut optio suscipit natus occaecati a et et ratione placeat incidunt.','2023-11-06',2),(3,4,18,'Libero harum id est qui et necessitatibus ratione id minus explicabo fuga rerum voluptatem ut praesentium est et architecto aperiam dolores ut alias quod necessitatibus sit tempora incidunt nulla quis eum aut vel id quae officiis quibusdam animi nostrum sit aut temporibus aliquid quaerat sunt porro cupiditate voluptatem molestiae excepturi non odio suscipit.','2023-02-13',5),(4,1,2,'Tenetur assumenda numquam laudantium distinctio quidem aut voluptas provident corrupti nostrum in minus qui molestias voluptas quo dolores et sit consequatur inventore aliquam explicabo iste aliquam facilis et atque non et dolor excepturi occaecati assumenda molestiae et corrupti enim quasi quia voluptas et ut tempore amet in voluptatem quo quas asperiores dignissimos sit.','2024-02-28',4),(5,4,2,'Non libero quia facilis labore incidunt at culpa ipsum nam magni provident qui qui et et numquam illum exercitationem tenetur similique nobis id quos corrupti ad nam ipsa similique dolorem asperiores temporibus libero ut commodi ex quas quod quo autem rerum et occaecati ex expedita animi cumque error et.','2023-03-13',2),(6,5,15,'Accusantium iure consequuntur vitae quis cum odio et beatae ducimus eos aut reprehenderit tempora eos magnam quia placeat ea dolor velit quis doloremque veniam distinctio.','2023-11-21',4),(7,5,12,'Et eaque consequuntur alias est dignissimos expedita vero temporibus velit iure distinctio alias doloremque et voluptatibus quidem nulla voluptatum neque illo quasi voluptas ullam non iste quis officiis ipsum maiores provident culpa similique illo dolor ex.','2023-01-20',3),(8,2,4,'Dolorum ea voluptate reprehenderit exercitationem consectetur nihil nobis itaque veritatis eaque quod ut quibusdam sit saepe voluptate id deleniti omnis quas provident qui sint ea minus consequatur molestias saepe quo officiis.','2023-01-05',1),(9,1,11,'Et reiciendis sit molestiae optio saepe eius delectus cumque qui qui voluptatem exercitationem quibusdam magni aliquid sed similique est sunt consequatur consequatur pariatur ullam accusamus omnis commodi voluptas nam consequatur.','2023-04-23',4),(10,5,23,'Aut quae vel doloribus alias sint in illo tenetur saepe est quia iste velit sit eos tempora in pariatur qui minima sunt modi et nobis dolore minima qui nulla quae placeat doloremque et magni unde sed fuga velit vitae ab quae est tempora et enim ipsa facilis accusamus consequuntur nesciunt in quia tempora consequatur.','2023-08-09',2),(11,4,20,'Veritatis quod cumque nam illum aut voluptas voluptate facilis possimus excepturi sunt qui at voluptate ut repellendus doloremque maiores alias ab magnam id harum voluptas quis aut non illum quod rerum error similique sed alias voluptatem voluptatem ut unde blanditiis aut delectus non.','2024-04-21',2),(12,2,11,'Dolorum inventore possimus optio quibusdam suscipit tempora consequatur non doloribus hic recusandae at vel earum quam tempora pariatur incidunt fuga non suscipit non aspernatur veritatis incidunt nesciunt.','2023-06-23',0),(13,1,7,'Voluptatem excepturi aut soluta corrupti nesciunt id est quas assumenda esse dolorem sed cupiditate sed ut voluptates aut a perspiciatis odio eaque dolores tempora consequuntur dicta sequi.','2023-04-27',1),(14,5,7,'Dignissimos eum tempore est aut facilis placeat doloribus numquam praesentium odio beatae et rerum soluta ut officia laboriosam esse ut dolores qui et illum veritatis vel quam omnis vel consequatur perspiciatis sit rerum inventore neque aut et fuga enim inventore id odio praesentium omnis eum nam non hic et suscipit sed molestiae qui.','2023-12-24',5),(15,5,11,'Blanditiis expedita nisi non delectus expedita doloribus ab sint laboriosam et tempore blanditiis maiores placeat qui ut quos sunt quia voluptas magnam et facere aut perferendis minima soluta eos est in et ipsam aut aspernatur ducimus laboriosam expedita aut velit maxime voluptas molestiae deleniti ad nisi nisi voluptas aut explicabo doloremque ullam nihil.','2024-04-30',4),(16,6,12,'Cupiditate veniam corporis beatae quidem temporibus aut rem ipsa delectus consequuntur velit voluptas et et dicta placeat doloremque doloremque omnis qui voluptatum quis facilis in aperiam dicta et provident perferendis odit in et modi est non nostrum pariatur et asperiores nemo ipsam ut deserunt ipsam recusandae ducimus asperiores dolores qui nihil adipisci excepturi nulla accusantium voluptates.','2024-04-05',4),(17,2,12,'Dolor commodi dolorem qui assumenda adipisci fugit omnis qui et magni est temporibus numquam sit quis nulla architecto voluptatem et corporis voluptas et facere autem consequatur aut quibusdam nesciunt aperiam ut autem libero.','2024-01-29',5),(18,6,14,'Sed non labore aperiam nulla velit et repellat pariatur ab deserunt reprehenderit quod quibusdam omnis fuga beatae officia itaque quibusdam odit commodi aut ut odio maiores ut voluptatem eum temporibus hic sed ea a esse vitae voluptas odit rem qui reprehenderit maiores in ipsa.','2023-11-12',1),(19,5,9,'Est nihil ea quos asperiores nam quod iste esse laboriosam molestiae ut consectetur est eius dolor velit nobis fuga quo nemo ut consequatur assumenda in.','2023-04-24',3),(20,1,11,'Unde ut iusto odio esse enim eum doloremque nemo tempora ea officia voluptas assumenda exercitationem non excepturi impedit et et ducimus nulla est qui ea ex ut debitis quia ad delectus doloremque temporibus tempora nisi impedit dolor culpa nihil minima molestiae dolor ex facilis nihil sint temporibus incidunt quas.','2023-07-12',2),(21,6,3,'Est sed dolorum ut aut nemo sapiente inventore at iusto ipsam soluta et praesentium iure nihil quasi consequatur et iure ipsam ea quod vel tenetur esse quo quia aut exercitationem et et incidunt aperiam ut et hic ipsa nulla odio aut sit quo quasi quod est.','2024-01-30',4),(22,3,17,'Accusamus aut vitae eos molestiae minima accusantium error nesciunt dolore est fuga reiciendis asperiores sed et sit aut qui neque magnam culpa autem reiciendis pariatur accusamus nihil sequi est aperiam quia dignissimos adipisci.','2024-02-20',0),(23,1,22,'In tempora sapiente voluptas consequatur laborum repudiandae deserunt modi ratione maxime eum dolores quam libero eum soluta nisi impedit minus voluptatum tenetur voluptatibus quia eos voluptatem.','2023-07-26',4),(24,1,5,'Ducimus aliquid voluptas sint et quos vero similique deleniti sed repellat eligendi inventore id exercitationem natus quo architecto aut quis labore blanditiis corporis reprehenderit ad commodi veritatis voluptatem vel consequatur nesciunt qui quam iure et non tempore sit vel sed ut sed eum dolor optio nostrum ad assumenda ab voluptatum.','2023-03-16',5),(25,4,18,'Ut quisquam amet facilis aut illo ut minus et tempora ut enim voluptatem beatae sunt dolorum voluptatem qui dolorem ducimus aliquid excepturi ut dolorem delectus id ut dolor perspiciatis dolores enim dolores eveniet atque.','2023-10-27',3),(26,6,22,'Voluptatibus amet quia distinctio odit quod repellendus animi ipsam et id itaque et pariatur omnis veniam mollitia itaque laborum voluptatem ipsa voluptatem excepturi officiis necessitatibus dolorem animi aspernatur sunt ea qui aut dolores sequi quidem et excepturi aliquam quibusdam eveniet non sunt hic.','2023-05-07',1),(27,5,10,'Qui officiis sit fugit aliquam sed consequatur facere non explicabo alias voluptas assumenda quia possimus et ipsam enim quas dolorem reprehenderit velit dolorem accusantium qui ad libero enim voluptatem vitae in nemo assumenda repellendus possimus.','2024-05-28',0),(28,4,2,'Aut eos iure dolores labore ipsam minus et eveniet in voluptatem minus laboriosam non amet temporibus autem quia ab veniam assumenda id eos eveniet excepturi enim et possimus distinctio quaerat vero et autem quia eaque.','2023-07-10',3),(29,5,1,'Necessitatibus accusamus placeat atque sequi deserunt rerum enim facere qui vel excepturi enim cumque omnis similique voluptatem dolorum unde quisquam magnam quasi consequatur fugiat nesciunt eos voluptatibus excepturi omnis sint et veniam ex magni deserunt ad dolore voluptatibus saepe libero laboriosam.','2023-09-27',4),(30,6,11,'Harum nobis explicabo aut est eaque rerum sunt eius delectus magni ratione et voluptates in qui voluptatem voluptates laudantium ad eligendi fugiat porro et quae ab quasi sit quia quis eos expedita voluptatem in neque soluta et autem ipsam natus odio.','2023-11-24',1),(31,2,17,'Consectetur inventore non est eveniet labore numquam reprehenderit voluptates sapiente aut illum exercitationem accusantium vitae tempora iste voluptas ea doloribus atque quos ut id adipisci repudiandae sit qui quia aliquid non odio molestias quaerat.','2023-05-18',2),(32,4,18,'Sapiente aut consequatur minus reprehenderit quia doloribus culpa quaerat perferendis reprehenderit aut voluptatem et enim ducimus ea voluptatum eligendi et nostrum et voluptatum sed nemo natus rerum hic enim.','2024-04-14',0),(33,2,13,'Aut consequatur in occaecati magni aut maxime autem harum quam cum blanditiis adipisci expedita ex adipisci ea praesentium saepe tempora ea voluptatem rerum nobis vitae id fugit voluptatum vitae nobis et placeat error et sed quia omnis quis id autem numquam quis qui perspiciatis labore voluptatem iste quis et optio consequuntur.','2023-12-03',4),(34,1,21,'Dolor eum sit unde illo molestiae ratione perspiciatis consequuntur blanditiis dolore eum eum soluta tempora natus voluptatem enim nulla impedit quos et placeat sit ad voluptas illo.','2024-02-03',0),(35,6,21,'Esse vel vero molestias ipsam maxime et adipisci facilis voluptatem quas sit praesentium non et unde dolores esse reiciendis a voluptatem aliquid aliquid sequi explicabo modi nobis ut sit.','2023-03-11',4),(36,1,1,'Saepe dicta quia consequatur illo cum est voluptas dolor ut nostrum veritatis blanditiis nobis ex sit earum itaque explicabo doloribus aut iure omnis molestiae temporibus veritatis omnis nam est facere quam rerum perferendis a non aut rerum dolorem exercitationem odio nesciunt est et et asperiores eius pariatur labore nobis.','2023-07-11',4),(37,5,4,'Dolore alias qui et ut a totam molestias quaerat voluptatibus dicta aliquam corporis iste cum quidem est et aut dolores error sint laborum repudiandae sequi asperiores velit dolore aspernatur velit sit eius perferendis sapiente optio omnis.','2023-12-16',1),(38,5,5,'In exercitationem eos qui a occaecati blanditiis aspernatur minus aut nostrum culpa repudiandae debitis dolorum quia fuga ea voluptatibus impedit asperiores aut earum odit aliquid magnam neque architecto non fugit quia et adipisci non.','2023-05-12',1),(39,6,7,'Voluptatum rerum qui aliquam magnam aut non in quod dolore pariatur atque rem amet est sunt vero aliquid ut consequatur quam iure nesciunt ad laudantium nam ipsa dolorem vitae voluptatem odio ratione voluptatum.','2023-11-11',2),(40,6,1,'A assumenda inventore molestiae nemo quo repudiandae quod voluptatem ex inventore corrupti qui veritatis natus blanditiis odio ipsum eum porro vero odit est est dolores quaerat dolorem at impedit dolorum maiores est nihil eum et ad distinctio debitis quia suscipit corrupti quasi temporibus nulla tempore dignissimos vitae quo.','2023-08-15',1),(41,2,3,'Vitae dicta error non minima fugit exercitationem ut consequatur numquam eaque saepe sit quam dolore rerum exercitationem illum reiciendis consequatur cumque assumenda consequatur voluptatum voluptas distinctio consequuntur ad enim qui explicabo aut et saepe.','2023-09-07',3),(42,6,11,'Eum distinctio id sed eos est illo in quia velit reprehenderit facilis est error repellat dolore enim sit quaerat mollitia voluptatem qui veniam omnis nihil deleniti repellendus qui ipsum similique harum tenetur dicta non ad accusantium at similique consequatur perferendis aliquid perspiciatis.','2024-04-28',3),(43,5,3,'Est temporibus nisi nisi architecto praesentium autem iure vitae id minus laudantium animi quam nobis adipisci eum aspernatur labore aut veniam eligendi distinctio at nostrum velit non nihil nihil dolorem maxime nesciunt nam et accusamus eaque optio pariatur sit aperiam distinctio deleniti dolores sit officiis quaerat sint quisquam nostrum.','2023-04-09',0),(44,1,2,'Dolore amet omnis voluptas veniam et est possimus nam recusandae quis vero iste sed excepturi aut distinctio eligendi laudantium ullam vel nulla labore et placeat tenetur ut ut fugiat et necessitatibus reprehenderit at aut ipsam itaque velit praesentium inventore et velit ex doloribus est maiores ut et tenetur fugit facilis quaerat dolore nihil.','2023-03-18',1),(45,3,17,'Ea ut rerum aliquid iste iste ipsum ipsum eius mollitia culpa aut aliquam ut et architecto a necessitatibus perspiciatis assumenda voluptatem aut architecto pariatur et porro itaque nihil laboriosam qui voluptatem aut quae omnis recusandae.','2023-01-15',2),(46,1,2,'Nemo qui atque perferendis omnis assumenda qui eum itaque voluptas mollitia quo aut suscipit error quia esse dolorem voluptas ducimus natus et dolor et non est iste adipisci ea quia repellendus non quo reprehenderit occaecati quaerat nulla itaque possimus tempore fuga.','2024-04-29',1),(47,5,12,'Totam nobis qui dolor reiciendis suscipit ut natus accusantium nihil eveniet impedit eaque perferendis voluptas rerum et quidem delectus repellendus officiis nobis nobis non amet ad officia perferendis quia.','2023-05-29',4),(48,5,10,'Similique vero quia voluptatem et exercitationem eum perspiciatis dicta non natus magni aliquid nihil illum eum iure accusantium necessitatibus vero in rerum natus aut sit recusandae aperiam sint ea quam quis voluptates rerum quia veniam totam expedita perferendis adipisci aut consequatur ullam sequi.','2023-06-18',3),(49,3,20,'Ut cum amet occaecati ut illo aut corrupti nam in repellat voluptate ab laudantium dignissimos accusamus eos qui eligendi et quia porro atque est reprehenderit tempora possimus distinctio recusandae possimus quia quia assumenda maxime autem voluptatem provident non iusto ad est sit et architecto explicabo.','2024-02-11',2),(50,2,21,'Voluptatem et praesentium molestiae doloremque necessitatibus repellendus iure iusto officia quae enim voluptas consequatur ut quo aut eum autem at et voluptatum enim quam non rerum in atque et itaque pariatur accusantium sed quidem saepe soluta.','2024-03-16',3);
/*!40000 ALTER TABLE `resenas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `id_reserva` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_guia` bigint(20) NOT NULL,
  `id_usuario` bigint(20) NOT NULL,
  `fecha` date NOT NULL,
  `importe` double NOT NULL,
  `estado` varchar(20) NOT NULL,
  `personas` bigint(20) NOT NULL,
  PRIMARY KEY (`id_reserva`),
  KEY `reservas_guias_fk` (`id_guia`),
  KEY `reservas_usuarios_fk` (`id_usuario`),
  CONSTRAINT `reservas_guias_FK` FOREIGN KEY (`id_guia`) REFERENCES `guias` (`id_guia`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reservas_usuarios_FK` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
INSERT INTO `reservas` VALUES (1,5,3,'2023-06-26',10,'0',1),(2,5,6,'2023-09-13',10,'0',1),(3,7,4,'2023-08-19',10,'1',2),(4,5,4,'2023-12-31',80,'1',8),(5,4,3,'2023-12-17',60,'1',10),(6,8,1,'2024-03-14',16,'1',2),(7,6,3,'2023-08-27',104,'1',8),(8,4,1,'2023-09-19',6,'1',1),(9,2,3,'2023-12-10',70,'0',10),(10,1,5,'2024-01-29',60,'0',5),(11,4,3,'2023-12-29',60,'0',10),(12,4,4,'2023-10-09',60,'0',10),(13,4,1,'2023-12-27',6,'-1',1),(14,8,5,'2024-01-05',40,'1',5),(15,3,6,'2024-05-08',8,'0',1),(16,4,5,'2023-07-28',48,'0',8),(17,2,2,'2023-12-23',14,'0',2),(18,2,4,'2023-08-12',42,'0',6),(19,5,1,'2023-10-19',70,'1',7),(20,6,2,'2023-01-30',52,'0',4),(21,6,1,'2023-05-03',117,'1',9),(22,8,6,'2024-02-04',80,'1',10),(23,1,5,'2023-05-27',108,'0',9),(24,9,3,'2023-06-14',48,'0',8),(25,9,6,'2023-08-16',60,'0',10),(26,7,2,'2023-07-26',10,'0',2),(27,10,4,'2023-09-11',45,'1',5),(28,3,3,'2024-01-30',8,'1',1),(29,9,6,'2024-01-02',30,'0',5),(30,9,4,'2024-01-27',60,'1',10),(31,5,4,'2024-01-01',40,'0',4),(32,6,1,'2023-11-25',117,'1',9),(33,5,2,'2023-01-25',10,'1',1),(34,4,2,'2024-03-15',18,'0',3),(35,7,5,'2023-08-05',20,'1',4),(36,5,4,'2023-06-23',70,'1',7),(37,5,2,'2023-07-14',70,'1',7),(38,9,2,'2023-08-19',30,'0',5),(39,7,4,'2023-03-08',15,'1',3),(40,2,6,'2023-10-04',63,'1',9),(41,4,5,'2023-10-17',48,'1',8),(42,3,6,'2023-03-29',40,'1',5),(43,6,1,'2023-09-20',65,'1',5),(44,5,4,'2023-01-13',100,'0',10),(45,1,5,'2023-06-24',120,'1',10),(46,10,5,'2024-01-17',72,'1',8),(47,7,1,'2023-03-02',15,'0',3),(48,3,6,'2023-05-13',32,'0',4),(49,1,3,'2023-06-13',108,'1',9),(50,2,6,'2023-03-14',21,'0',3);
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT,
  `verificado` tinyint(1) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `usuarios_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Máximo','Novoa Pérez','maxi@mo.com',NULL,'$2y$12$EsLZ0jtjVeRiMN5Owd//ne6Jba5bJdfbzR9Wp1gbGwHw3.9RPv/tq',1,0,NULL,NULL),('Menganito','Alonso del Canto','menganito@alonso.com',NULL,'$2y$12$OaIxTjlKzT4Z75jjUoT8Q.wd5ssCyG21oY/lhoD8uCfdCoC3DXKB6',2,0,NULL,NULL),('Ainara','de los Olivos Diaz','ainara@olivos.com',NULL,'$2y$12$KFQcX2dllnxYKCK4MV0fBeuJSmjwBLdO15k5Arr5WUethfFZsJ2CC',3,0,NULL,NULL),('Antonella','Lucascilla','anto@nella.com',NULL,'$2y$12$jiqp1n/KRNqi..tdYsKL0uim3gqJ7lbWU0L/SNxkPn4uvZJIm4Xm6',4,0,NULL,NULL),('Pepe','Vez','pepe@vez.com',NULL,'$2y$12$wP7UL01IWMhfxBGchaEXKudGVZtOjeYdpZPha4EmEer3/pp7/pXIi',5,0,NULL,NULL),('Eustaquio','Habichuela','eustaquio@habichuela.com',NULL,'$2y$12$UsAAf1sVJqwmGA/nwtMw2.8IRKhw8uHU0auiVFTU7zcbMmXjHIvVu',6,0,NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'city_explorer'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-30 11:16:54
