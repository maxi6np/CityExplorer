<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Lugar;
use Illuminate\Support\Facades\Storage;

class LugarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    private $lugares = [
        [
            'nombre' => 'Catedral de Oviedo',
            'descripcion' => 'La Santa Iglesia Basílica Catedral Metropolitana de San Salvador de Oviedo es un impresionante edificio gótico. Su historia se extiende por más de 1200 años.
            La construcción de la catedral comenzó en el siglo VIII, durante el reinado del rey asturiano Fruela I.
            La primera iglesia fue destruida en un incendio en el siglo XI y luego fue reconstruida en el siglo XII en estilo románico.
            La Cámara Santa, que data del siglo IX, está declarada Patrimonio de la Humanidad por la Unesco.
            Contiene tesoros como las cruces de la Victoria y de los Ángeles, símbolos de Asturias y Oviedo, respectivamente, así como el Arca Santa, que guarda numerosas reliquias, incluido el Santo Sudario.
            En 2015, la Unesco incluyó la Cámara Santa como uno de los bienes individuales del Camino Primitivo en la ampliación del Camino de Santiago en España. Esta catedral es un tesoro histórico y artístico que merece ser explorado y admirado.',
            'imagen' =>  'catedral_oviedo.jpg',
            'hora_apertura' => '09:00',
            'hora_cierre' => '18:00',
            'precio' => '7.00',
            'id_ciudad' => '1',
            'latitud' => '43.3623',
            'longitud' => '-5.8451'
        ],
        [
            'nombre' => 'Parque San Francisco',
            'descripcion' => 'Parque urbano situado en el centro de la ciudad Oviedo (España). Es uno de los lugares más emblemáticos de la ciudad y uno de los mayores parques urbanos de Asturias.
            Teniendo como origen los huertos del desaparecido Convento de San Francisco, en su interior se pueden distinguir varios paseos y avenidas: el paseo de los Álamos, el paseo del Bombé, el paseo de José Cuesta, la avenida Italia o la avenida Alemania, entre otras. Cuenta con estanque y numerosos y conocidos monumentos como la estatua de Mafalda o José Tartiere.
            Es escenario habitual de numerosos eventos culturales y actividades.
            Este espacio natural limpio y frondoso se ha convertido durante generaciones enteras en espacio de recreo y paseo.
            Es un entorno seguro en donde a través de sus sendas peatonales y entre sus árboles se guardan los testimonios miles de ovetenses y visitantes, con recuerdos ligados a la osa Petra, los barquillos y los helados, los pavos reales, la fuente del caracol, el estanque de los patos o el quiosco de la música del Bombé.
            El pavo real se ha convertido en un icono del Campo de San Francisco conviviendo con los ovetenses en una natural armonía.',
            'imagen' => 'parque_san_francisco.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '1',
            'latitud' => '43.3625',
            'longitud' => '-5.8540'
        ],
        [
            'nombre' => 'Museo de Bellas Artes',
            'descripcion' => 'Es el museo más importante de Asturias. Fue inaugurado el 19 de mayo de 1980 a partir de la colección de arte propiedad de la antigua Diputación Provincial de Oviedo, ahora depende de la Consejería de Cultura del Principado de Asturias y es sufragado con fondos del Principado y del Ayuntamiento de Oviedo.
            El Museo actualmente cuenta con una colección integrada por casi 15.000 obras, entre pintura (unas 1500), escultura, dibujo, grabado y artes industriales (unas 4.000 piezas),2​ aunque realmente dispone de una exhibición permanente de 800.
            Contiene pinturas de artistas españoles, especialmente asturianos, y extranjeros, entre los que sobresale la pintura italiana y flamenca, así como esculturas, fotografías y objetos de vidrio y loza.
            En 2017 la colección se ha visto notablemente enriquecida con 33 obras importantes donadas por Plácido Arango Arias.',
            'imagen' => 'museo_bellas_artes.jpg',
            'hora_apertura' => '10:30',
            'hora_cierre' => '20:30',
            'precio' => '0.00',
            'id_ciudad' => '1',
            'latitud' => '43.3622',
            'longitud' => '-5.8443'
        ],
        [
            'nombre' => 'Playa de San Lorenzo',
            'descripcion' => 'Está situada en pleno centro de Gijón. Con una longitud de 1550 metros y forma de concha, es una de las playas más emblemáticas del Principado de Asturias.
            Se prolonga desde la escalera 0 ("La Cantábrica"), hasta la escalera número 16 en la desembocadura del río Piles. Paralela a ella discurre el Paseo del Muro de San Lorenzo, que continúa hacia el Este más allá de la propia playa con la conocida senda costera del Cervigón, un recorrido marítimo de más de 2 kilómetros que nos acerca otras playas como la de El Rinconín o la de Peñarrubia.
            En total, la extensión del arenal asciende a 40.000 metros cuadrados en pleamar y 240.000 en bajamar.
            El Muro, emblemático paseo marítimo, fue construido entre 1907 y 1916. Destaca la construcción de «La Escalerona».
            Se caracteriza por una arena fina y tostada. El oleaje es moderado/fuerte y se distinguen 3 zonas de baño diferenciadas y vigiladas por socorristas: Escalerona (escalera 4), Centro (escaleras 7-8) y Piles (escalera 12)',
            'imagen' => 'playa_san_lorenzo.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '2',
            'latitud' => '43.5417',
            'longitud' => '-5.6611'
        ],
        [
            'nombre' => 'Laboral Ciudad de la Cultura',
            'descripcion' => ' La Universidad Laboral de Gijón es un complejo monumental con una rica historia que se remonta a su construcción en 1948 como orfelinato minero. A lo largo de los años, ha pasado por diferentes etapas y usos, desde su función inicial como residencia-escuela para huérfanos de la minería hasta convertirse en un centro educativo y cultural emblemático.
            El edificio, que es el más grande de España y cuenta con un valor arquitectónico excepcional, ha sido testigo de importantes acontecimientos históricos, incluida la dictadura franquista en España. Esto ha generado controversia en torno a su pasado y su posible declaración como Patrimonio de la Humanidad por la UNESCO.
            Aunque se reconoce su importancia histórica y artística, algunos argumentan que su asociación con el régimen franquista debe ser tenida en cuenta al considerar su candidatura para el Patrimonio de la Humanidad. Sin embargo, otros defienden su valor cultural y su papel en la memoria histórica de España.
            En los últimos años, la Universidad Laboral ha sido objeto de una importante restauración y renovación, convirtiéndose en un centro de cultura, educación y ocio. A pesar de los desafíos y controversias, sigue siendo un símbolo importante en la ciudad de Gijón y en toda Asturias.',
            'imagen' => 'ciudad_laboral.jpg',
            'hora_apertura' => '08:00',
            'hora_cierre' => '20:00',
            'precio' => '0.00',
            'id_ciudad' => '2',
            'latitud' => '43.5430',
            'longitud' => '-5.6654'
        ],
        [
            'nombre' => 'Jardín Botánico Atlántico',
            'descripcion' => 'Este jardín situado a dos kilómetros de Gijón ha sido el primero de su tipo en el noroeste de España al inaugurarse el 25 de abril de 2003. Tiene una extensión de 150 000 m². aunque está en proyecto su expansión hasta los 250 000 m². Dentro de todo este terreno se catalogan alrededor de 30 000 plantas de 2000 especies distintas. El jardín está dividido en cuatro entornos diferenciados, que son el entorno Cantábrico, la factoría vegetal, Jardín histórico de la Isla y el itinerario atlántico.
            Las obras se iniciaron en diciembre de 2002 tras tres años de desarrollo del proyecto, participando en la inversión el Principado de Asturias y la Unión Europea a través del Fondo Social Europeo junto al Ayuntamiento de Gijón. Inaugurado el 25 de abril de 2003.
            Este entorno está representado por el tejo en la zona de presentación inicial. El jardín de la isla data del siglo xix, pertenecía al industrial gijonés Florencio Valdés. En él se pueden encontrar camelias, plátanos, un estanque, laberinto de tejos, una piscina y una laguna. Destaca también por sus complejo hidráulicos como el estanque de baños y estanque de La Noria.',
            'imagen' => 'jardin_botanico.jpg',
            'hora_apertura' => '10:00',
            'hora_cierre' => '18:00',
            'precio' => '2.90',
            'id_ciudad' => '2',
            'latitud' => '43.5216',
            'longitud' => '5.6159'
        ],
        [
            'nombre' => 'Parque del Muelle',
            'descripcion' => 'Ha sido el parque tradicional de Avilés, desde su construcción a finales del siglo XIX hasta la década de los setenta del XX, justamente cuando se recuperó para la ciudad el parque de Ferrera.
            Edificado sobre antiguos terrenos de marisma, es uno de los símbolos de crecimiento avilesino entre los siglos XIX y XX. El parque fue uno de los espacios ganados entonces a la mar, lo que también hizo que se desplazara el puerto, de origen medieval y situado al lado del templo de los Franciscanos, hacia la margen izquierda de la ría.
            Un magnífico quiosco de música que ofrecía antes los conciertos festivos de la banda municipal, sirve hoy de escenario a varios festivales en verano.
            En el extremo sur destacan la rosaleda, 12 estatuas y una preciosa fuente. Al lado opuesto, la estatua de Pedro Menéndez y el monumento a la foca, todo un emblema de la ciudad.',
            'imagen' => 'parque_muelle_aviles.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '3',
            'latitud' => '43.5569',
            'longitud' => '-5.9281'
        ],
        [
            'nombre' => 'Centro Niemeyer',
            'descripcion' => 'El Centro Cultural Niemeyer cumple con una triple misión de enriquecimiento del patrimonio público en Avilés, Asturias.
            Es considerada la mejor muestra de las obras realizadas en Europa por el arquitecto Oscar Niemeyer.
            También es la pieza maestra de la renovación urbanística en curso para la ciudad de Avilés.
            Y por último, es una infraestructura de primer nivel abierta a todo tipo de manifestaciones culturales.
            El Centro Cultural Niemeyer tuvo un origen remoto. Tras recibir el Premio Príncipe de Asturias de las Artes en 1989, Oscar Niemeyer quiso avivar su vínculo con Asturias creando este centro cultural como conmemoración de los 25 años del premio. Así es como el 26 de marzo de 2011 fue inaugurado este edificio polivalente.
            El Centro Cultural Niemeyer devolvió la esperanza al estar poniendo los fundamentos de un nuevo horizonte económico y cultural para la región. Además, participa en un proyecto de recuperación del espacio público de Avilés para nuevos usos. Por eso, la ubicación contribuye a la integración urbana de antiguas zonas industriales de la ría de Avilés.
            Gracias a Niemeyer, la localidad asturiana se sitúa en la agenda de las grandes obras al servicio de la educación, la cultura y las artes. ',
            'imagen' => 'centro_niemeyer_aviles.jpg',
            'hora_apertura' => '10:00',
            'hora_cierre' => '20:00',
            'precio' => '0.00',
            'id_ciudad' => '3',
            'latitud' => '43.5567',
            'longitud' => '-5.9248'
        ],
        [
            'nombre' => 'Parque Dorado',
            'descripcion' => 'El Parque Dorado, ubicado en el centro de Sama, Langreo, es un espacio emblemático construido a principios del siglo XX. Su nombre honra a Antonio María Dorado, quien lideró con determinación la construcción del parque tras una devastadora inundación en 1900, que dejó terrenos en la margen izquierda del río Nalón. Dorado transformó estos terrenos en el parque que conocemos hoy, rellenándolos con escombros de las minas.
            El parque, el segundo más grande de Langreo después del Parque Alcalde Antonio García Lago en La Felguera, se extiende a lo largo del río Nalón y está conectado con el paseo de Los Llerones mediante puentes y una pasarela. Presenta una distribución alargada con una calle principal bordeada de árboles y zonas ajardinadas. Además de la calle principal, hay caminos más pequeños, estanques, palomares y estatuas dispersas por el parque.
            En la parte trasera, se encuentra un minigolf recientemente construido, junto con una cancha polideportiva, mesas de ping-pong y pistas de paddle.',
            'imagen' => 'parque_dorado.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '4',
            'latitud' => '43.3081',
            'longitud' => '-5.6994'
        ],
        [
            'nombre' => 'Museo de la Minería y de la Siderurgía',
            'descripcion' => 'El Museo de la Siderurgia de Asturias (MUSI), situado en La Felguera, Langreo, España, inaugurado en 2006, representa un testimonio vivo del legado industrial de la región. Fundada en 1857 por Pedro Duro, la empresa Duro y Compañía se convirtió en un importante centro siderúrgico que transformó el valle de La Felguera y generó empleo para miles de asturianos.
            El MUSI ofrece una experiencia única que combina cultura, historia, industria y ocio. Situado en la antigua torre de refrigeración de la Fábrica de La Felguera, el museo busca mostrar al visitante el proceso de industrialización que vivieron las Cuencas Mineras asturianas.
            Para aquellos interesados en investigar más a fondo, el museo cuenta con una sala de documentación y biblioteca. Además, ofrece un recorrido por el casco urbano de La Felguera, donde se muestra el patrimonio artístico-industrial y el llamado paternalismo industrial. Durante este recorrido, los visitantes pueden conocer una casa modelo decorada según las condiciones de las familias obreras de la época.',
            'imagen' => 'museo_mineria_langreo.jpg',
            'hora_apertura' => '10:00',
            'hora_cierre' => '19:00',
            'precio' => '5',
            'id_ciudad' => '4',
            'latitud' => '43.2933',
            'longitud' => '-5.6871'
        ],
        [
            'nombre' => 'Centro de Interpretación del Poblado Minero de Bustiello',
            'descripcion' => 'El poblado de Bustiello constituye una excepción dentro del patrimonio industrial asturiano: un conjunto levantado entre 1890 y 1925 por la Sociedad Hullera Española, una relevante empresa minera del grupo industrial del Marqués de Comillas. Una iglesia, un monumento, un casino, una escuela, un sanatorio…y los alojamientos, para ingenieros y obreros, que responden a un cuidado plan de conjunto y un esmero estético inusuales.
            Para descubrirlo y comprender las claves del “paternalismo industrial” que ejemplifica, el recorrido debe iniciarse en el Centro de Interpretación ubicado en uno de los antiguos chalets (la casa de Don Isidro) donde se expone ordenadamente la importancia geológica e industrial de la cuenca minera, así como la red de firmas empresariales del Marqués de Comillas y, finalmente, las características del poblado desde una perspectiva histórica, artística y patrimonial, para las que se reserva el segundo piso del edificio, desde donde se domina este singular poblado que responde al modelo de ciudad jardín.',
            'imagen' => 'centro_interpretacion_mieres.jpg',
            'hora_apertura' => '10:30',
            'hora_cierre' => '18:30',
            'precio' => '5',
            'id_ciudad' => '5',
            'latitud' => '43.1888',
            'longitud' => '-5.7689'
        ],
        [
            'nombre' => 'Iglesia de San Juan',
            'descripcion' => 'La iglesia de San Juan Bautista es el templo parroquial de la villa de Mieres del Camino, en el municipio asturiano de Mieres.
            La iglesia de San Juan original se encontraba en el núcleo de La Guareña hasta que una riada asoló el templo en 1670. Tras esto se construyó un nuevo templo románico que estuvo en el actual emplazamiento de la parroquia en el barrio de La Pasera, hasta su derribo en 1927. Cerca de este lugar aún se encuentra el cementerio municipal de Mieres. Un miembro de la familia Rodríguez-San Pedro encontró entre los escombros restos de la portada románica a punto de perderse (perteneciente al primitivo templo de La Guareña) y la llevó a Gijón, donde se conserva en el Palacio de los Condes Rodríguez Sampedro. La festividad de San Juan se celebra cada 24 de junio.',
            'imagen' => 'iglesia_san_juan.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '5',
            'latitud' => '43.2522',
            'longitud' => '-5.7719'
        ],
        [
            'nombre' => 'Basílica de Santa María la Real de Covadonga',
            'descripcion' => 'La basílica de Santa María la Real es un sitio de culto católico situado en Covadonga, Principado de Asturias (España), declarado basílica menor el 11 de septiembre de 1901.
            El templo fue ideado por Roberto Frassinelli y levantado entre 1877 y 1901 por el arquitecto Federico Aparici y Soriano, de estilo neorrománico, construido íntegramente en piedra caliza rosa.
            En 1777 un incendio destruyó el antiguo templo, que se encontraba contiguo a la Santa Cueva donde se veneraba y se venera a la Virgen de Covadonga (La Santina), conmemorativo de la batalla de Covadonga. Igualmente ardió en su totalidad lo que contenía la cueva, que estaba completamente recubierta de madera.
            Se decidió entonces levantar uno nuevo a modo de monumental santuario, para lo que se pidió limosna en toda España, con la oposición del cabildo, ya que los canónigos querían reconstruir el templo de la Santa Cueva y el santuario ideado por el arquitecto Ventura Rodríguez, que nunca pudo llevarse a cabo.',
            'imagen' => 'basilica_covadonga.jpg',
            'hora_apertura' => '09:00',
            'hora_cierre' => '18:00',
            'precio' => '0.00',
            'id_ciudad' => '6',
            'latitud' => '43.3113',
            'longitud' => '-5.0726'
        ],
        [
            'nombre' => 'Puente Romano',
            'descripcion' => 'El puente medieval de Cangas de Onís o puentón es una construcción situada sobre el río Sella a su paso por Cangas de Onís, y que separa los concejos de Cangas de Onís y de Parres, perteneciendo, por tanto, la mitad a cada concejo. Su figura está asociada al pueblo de Cangas de Onís
            El Puentón es uno de los símbolos de Asturias. Forma parte del escudo de Cangas de Onís, junto a la cruz sobre la media luna invertida que recuerda la victoria sobre los musulmanes en la batalla de Covadonga y la leyenda Minima urbium, maxima sedium (mínima urbe, máxima sede)
            En 1931 fue declarado Monumento Histórico Artístico. Es, por tanto, bien de interés cultural. En sus aledaños suelen ir a pescar salmones numerosos ribereños de la zona del río Sella.',
            'imagen' => 'puente_romano.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '6',
            'latitud' => '43.3493',
            'longitud' => '-5.1262'
        ],
        [
            'nombre' => 'Playa de Toró',
            'descripcion' => 'La playa de Toró, conocida también como Entremís, es una playa del concejo de Llanes, Asturias. Se enmarca en las playas de la Costa Oriental de Asturias, también llamada Costa Verde Asturiana y está considerada paisaje protegido, desde el punto de vista medioambiental (por su vegetación). Por este motivo está integrada, según información del Ministerio de Agricultura, Alimentación y Medio Ambiente, en el Paisaje Protegido de la Costa Oriental de Asturias.
            Por su espectacularidad cuenta con la certificación Q de calidad, y desde 1996 cuenta según los años con Bandera Azul, siendo el último año en la que la obtuvo 2014.',
            'imagen' => 'playa_toro.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '7',
            'latitud' => '43.4191',
            'longitud' => '-4.7584'
        ],
        [
            'nombre' => 'Paseo de San Pedro',
            'descripcion' => 'En este paseo cxisten pocos elemento decorativos, algo que le confiere un tono de soledad al lugar y que nos permite extender la vista sin obstáculos. Apenas unos bancos para sentarse y unos árboles minúsculos cuyas formas pueden resultar inquietantes si el horizonte se torna negro. Se trata de una docena de frágiles tamarindos plantados en el último cuarto del siglo XIX y que hoy se aferran a la tierra y parecen alimentarse de las miradas de los visitantes.
            Gracias a esta pasarela natural, de unos ocho metros de anchura, observamos con detalle la muralla de la ciudad medieval, con su característico torreón y las iglesias más importantes. A un lado, el pequeño puerto pesquero de la villa marinera y una peculiar perspectiva de «Los cubos de la memoria», la obra en la que Agustín Ibarrola plasmó su concepto del arte sobre la escollera del puerto.
            Inmediatamente detrás de las casas, la imponente sierra de Cuera parece estar a dos pasos del mar con sus cimas de casi 2.000 metros de altura. Tras ella, si el tiempo lo permite, los Picos de Europa se asoman para coronar la panorámica.',
            'imagen' => 'paseo_san_pedro.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '7',
            'latitud' => '43.4190',
            'longitud' => '-4.7559'
        ],

        [
            'nombre' => 'Bufones de Pría',
            'descripcion' => 'Los más conocidos de Asturias. Se debe dejar el coche y seguir caminando por los impresionantes acantilados que veremos en frente. En los días que la mar está agitada el espectáculo es sorprendente, es un lugar fantástico, las vistas desde sus acantilados merecen el viaje y si la marea es alta el espectáculo es inimaginable. Hay una ruta de los bufones, con inicio y fin en Llames, de dificultad baja y una duración de unas cuatro horas aproximadamente que merece la pena hacer para disfrutar de su belleza.
            Se trata de la agrupación de bufones más occidental de la costa asturiana. Está integrado dentro del Paisaje Protegido de la Costa Oriental de Asturias.
            Un bufón es una formación kárstica que consiste en un orificio vertical formado a pocos metros del borde de un acantilado de roca caliza y que inferiormente comunica con el mar. Cuando la marea sube y las olas baten con fuerza, expulsa hacia arriba un chorro de agua de mar pulverizada, lo que provoca un sonido característico que es lo que le da el nombre de bufón. La columna de agua pulverizada puede alcanzar más de diez metros de altura y el bufido oírse a varios kilómetros.',
            'imagen' => 'bufones_pria.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '7',
            'latitud' => '43.4190',
            'longitud' => '-4.7559'
        ],
        [
            'nombre' => 'Ermita de la Guía',
            'descripcion' => 'Es una capilla renacentista de finales del siglo XVI, aunque reformada en 1892, que acoge a la patrona de los marineros. Al edificio le falta una nave, perdida probablemente en un desprendimiento, y su elemento mejor conservado es la magnífica portada sur, en la que aún se aprecia la obra original de cantería.
            Hubo desde el siglo XVI al XIX, junto a la capilla, una fortificación con una batería para la defensa del puerto. Los tres cañones que hoy se ven allí forman parte de la historia riosellana, pues fueron arrojados al mar por los franceses en su retirada de la villa en la guerra de la Independencia y restituidos a su emplazamiento original en 1999.
            Ermita y batería son hoy el mejor mirador para contemplar la villa, las montañas y el mar Cantábrico.',
            'imagen' => 'ermita_guia.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '8',
            'latitud' => '43.4694',
            'longitud' => '-5.0652'
        ],
        [
            'nombre' => 'Playa de Santa Marina',
            'descripcion' => 'Es la más importante del concejo, conocida como “La Playa de los Picos de Europa” por su proximidad al Parque Nacional, del que dista 35 kilómetros. Está enclavada junto a la desembocadura del Sella y forma una amplia concha flanqueada por dos montes, el Somos, donde está el faro, y el Corberu, que protege la entrada del puerto. Es una gran playa urbana, de arena dorada. Dotada de todos los servicios con los que puede contar una playa, tal como acredita la consecución en 2004 del distintivo Q de Calidad Turística. Ideal para el baño y la práctica del  surf,  está delimitada por el Paseo Marítimo donde destacan los preciosos chalés modernistas y al final de éste, en la parte occidental de la playa es donde están las famosas huellas de dinosaurios.
            Servicios: servicio de salvamento, duchas, chiringuitos, fuentes, servicio de baño asistido, baños y duchas adaptados, aparcamiento, aparcamiento para personas con movilidad reducida y para  bicicletas , megafonía, sistema de recogida de quejas y sugerencias, sistema de identificación para niños perdidos. Longitud 1.200m.',
            'imagen' => 'playa_santa_marina.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '8',
            'latitud' => '43.4654',
            'longitud' => '-5.0688'
        ],
        [
            'nombre' => 'Pueblo Pesquero',
            'descripcion' => 'Con una población de casi 5000 habitantes. Durante el verano las calles de este pueblo con forma de anfiteatro romano son un hervidero de turistas.
            Como curiosidad den 1995 Cudillero ganó la primera temporada del concurso de TVE «El Gran Prix». Existen unos pocos restos romanos muy difuminados por esta zona.
            La fundación del pueblo y su núcleo principal se produce en el siglo XIII como un pequeño pueblo de pescadores. Este se consolidaría como puerto marítimo en el siglo XV y durante los siglos venideros se construirían los principales edificios de la villa.
            En el siglo XIX se le entregaría la autonomía municipal a Cudillero por su importante puerto pesquero, la cual se ampliaría en el siglo XX.',
            'imagen' => 'pueblo_pesquero.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '9',
            'latitud' => '43.5634',
            'longitud' => '-6.1462'
        ],
        [
            'nombre' => 'Cabo Vidio',
            'descripcion' => 'Se trata de uno de los cabos más importantes de Asturias, desde el que se puede divisar Estaca de Bares o el Cabo de Peñas.
            Este cabo forma un acantilado de 80 m sobre el mar y una de sus mayores atracciones son el faro (abajo) y la iglesiona, que es una cueva formada por la erosión del oleaje y que se puede visitar en bajamar.
            Geológicamente este cabo está formado por cuarcitas y pizarras. Dentro de la fauna cabe destacar que el acantilado es una importante zona de cría de diferentes aves marinas entre las que sobresalen el cormorán moñudo y gaviotas.
            Al lado encontrarmos el Faro de Cabo Vidio, el último faro construido hasta la fecha en Asturias y uno de los más nuevos de España.',
            'imagen' => 'cabo_vidio.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '9',
            'latitud' => '43.5938',
            'longitud' => '-6.2432'
        ],
        [
            'nombre' => 'Cementerio parroquial de Luarca',
            'descripcion' => 'Situado en una privilegiada situación, sobre un promontorio que sirvió de baluarte defensivo de los ataques provenientes del mar, según don Jesús Evaristo Casariego pudo haber sido construida por primera vez en el siglo XIII, aunque sufrió diversas remodelaciones en siglos posteriores, especialmente en el XVIII, promovida por el obispo Rafael Tomás Menéndez de Luarca.
            Adopta su parte derecha una posición tradicional, con el alero del tejado a dos aguas que concluye de forma regular y con un pequeño vano de medio punto que internamente ilumina una habitación anexa a la tribuna, también pintado en color gris como la puerta. Sin embargo, su parte izquierda adopta una forma semicircular que envuelve la torre.
            Sobre la fachada se sitúa la espadaña de sillares de granito, formada por dos pilastras, molduradas a la manera toscana, una pequeña bóveda de medio punto en la que se sitúa la campana y un frontón rematado por una cruz de brazos iguales. La torre, rectangular, posee escalera de caracol, pequeños vanos y se remata con un chapitel truncado.
            En el cementerio de Luarca se encuentran los restos mortales de Severo Ochoa de Albornoz, premio Nobel de medicina, y de su mujer Carmen. Severo Ochoa murió el 1 de noviembre de 1993.',
            'imagen' => 'cementerio_luarca.jpg',
            'hora_apertura' => '09:30',
            'hora_cierre' => '18:00',
            'precio' => '0.00',
            'id_ciudad' => '10',
            'latitud' => '43.5484',
            'longitud' => '-6.5325'
        ],
        [
            'nombre' => 'Puerto de Luarca',
            'descripcion' => 'En tiempos modernos, Luarca experimentó un período de expansión y desarrollo, marcado por la emigración a América y la llegada de indianos que invirtieron en la economía local. La construcción del primer dique en el siglo XIX y la expansión urbana en el siglo XX transformaron la fisonomía de la villa.
            Sin embargo, la Guerra Civil Española de 1936 interrumpió este progreso, dejando un período de represión y dificultades económicas. A pesar de los desafíos, Luarca comenzó a recuperarse en las décadas de 1950 y 1960, con la creación de instituciones como la Junta Municipal y la Oficina de Turismo, y la mejora de las comunicaciones con la construcción de nuevas carreteras y la llegada del ferrocarril.
            Hoy en día, Luarca es un destino turístico popular, conocido por su belleza natural, su patrimonio histórico y su vibrante vida cultural. El Certamen Nacional de Pintura Luarca, la industria pesquera y las cooperativas agrarias son solo algunas de las facetas que contribuyen a su vitalidad y atractivo. Luarca, con su rica historia y su espíritu de resiliencia, sigue siendo un lugar lleno de encanto y oportunidades para quienes lo visitan y lo llaman hogar.',
            'imagen' => 'puerto_luarca.jpg',
            'hora_apertura' => '00:00',
            'hora_cierre' => '00:00',
            'precio' => '0.00',
            'id_ciudad' => '10',
            'latitud' => '43.5467',
            'longitud' => '-6.5326'
        ]
    ];


    public function run(): void
    {
        foreach ($this->lugares as $lugar) {
            $nuevoLugar = new Lugar();
            $nuevoLugar->nombre = $lugar['nombre'];
            $nuevoLugar->descripcion = $lugar['descripcion'];
            $nuevoLugar->imagen = '/places/' . $lugar['imagen'];
            $nuevoLugar->hora_apertura = $lugar['hora_apertura'];
            $nuevoLugar->hora_cierre = $lugar['hora_cierre'];
            $nuevoLugar->precio = $lugar['precio'];
            $nuevoLugar->id_ciudad = $lugar['id_ciudad'];
            $nuevoLugar->latitud = $lugar['latitud'];
            $nuevoLugar->longitud = $lugar['longitud'];
            $nuevoLugar->save();
        }
        $this->command->info('Tabla de lugares inicializada con datos');
    }
}
