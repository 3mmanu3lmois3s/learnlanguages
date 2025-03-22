let currentMethod = "common";      // "common" o "reinforcement"
let currentHabitacion = "cocina";    // Habitación por defecto para el método común

const instrucciones = {
  "reinforcement": [
    { "español": "Quítate el zapato", "ingles": "Take off your shoe", "alemán": "Zieh deinen Schuh aus", "italiano": "Togliti la scarpa", "frances": "Enlève ta chaussure" },
    { "español": "Ponte el zapato", "ingles": "Put on your shoe", "alemán": "Zieh deinen Schuh an", "italiano": "Metti la scarpa", "frances": "Mets ta chaussure" },
    { "español": "Levanta el dedo pulgar", "ingles": "Raise your thumb", "alemán": "Heb deinen Daumen", "italiano": "Alza il pollice", "frances": "Lève ton pouce" },
    { "español": "Mira hacia arriba", "ingles": "Look up", "alemán": "Schau nach oben", "italiano": "Guarda in alto", "frances": "Regarde en haut" },
    { "español": "Mira hacia abajo", "ingles": "Look down", "alemán": "Schau nach unten", "italiano": "Guarda in basso", "frances": "Regarde en bas" },
    { "español": "Mira hacia el frente", "ingles": "Look forward", "alemán": "Schau geradeaus", "italiano": "Guarda davanti", "frances": "Regarde devant" },
    { "español": "Pon el lápiz sobre la mesa", "ingles": "Put the pencil on the table", "alemán": "Leg den Bleistift auf den Tisch", "italiano": "Metti la matita sul tavolo", "frances": "Pose le crayon sur la table" },
    { "español": "Pon el lápiz debajo de la mesa", "ingles": "Put the pencil under the table", "alemán": "Leg den Bleistift unter den Tisch", "italiano": "Metti la matita sotto il tavolo", "frances": "Pose le crayon sous la table" },
    { "español": "Pon el lápiz sobre un cuaderno", "ingles": "Put the pencil on a notebook", "alemán": "Leg den Bleistift auf ein Notizbuch", "italiano": "Metti la matita su un quaderno", "frances": "Pose le crayon sur un cahier" },
    { "español": "Tócate el hombro", "ingles": "Touch your shoulder", "alemán": "Fass deine Schulter an", "italiano": "Toccati la spalla", "frances": "Touche ton épaule" },
    { "español": "Tócate la cabeza", "ingles": "Touch your head", "alemán": "Fass deinen Kopf an", "italiano": "Toccati la testa", "frances": "Touche ta tête" },
    { "español": "Mira tu dedo meñique izquierdo", "ingles": "Look at your left little finger", "alemán": "Sieh dir deinen linken kleinen Finger an", "italiano": "Guarda il tuo mignolo sinistro", "frances": "Regarde ton petit doigt gauche" },
    { "español": "Mueve tu mano derecha", "ingles": "Move your right hand", "alemán": "Bewege deine rechte Hand", "italiano": "Muovi la tua mano destra", "frances": "Bouge ta main droite" },
    { "español": "Mueve tu mano izquierda", "ingles": "Move your left hand", "alemán": "Bewege deine linke Hand", "italiano": "Muovi la tua mano sinistra", "frances": "Bouge ta main gauche" },
    { "español": "Mueve tu pie derecho", "ingles": "Move your right foot", "alemán": "Bewege deinen rechten Fuß", "italiano": "Muovi il tuo piede destro", "frances": "Bouge ton pied droit" },
    { "español": "Mueve tu pierna izquierda", "ingles": "Move your left leg", "alemán": "Bewege dein linkes Bein", "italiano": "Muovi la tua gamba sinistra", "frances": "Bouge ta jambe gauche" },
    { "español": "Muerde tu dedo pulgar", "ingles": "Bite your thumb", "alemán": "Beiß auf deinen Daumen", "italiano": "Morditi il pollice", "frances": "Mords ton pouce" },
    { "español": "Abraza a tu pareja o amigo", "ingles": "Hug your partner or friend", "alemán": "Umarme deinen Partner oder Freund", "italiano": "Abbraccia il tuo partner o amico", "frances": "Embrasse ton partenaire ou ami" },
    { "español": "Acaricia tu cabello", "ingles": "Stroke your hair", "alemán": "Streichele dein Haar", "italiano": "Accarezza i tuoi capelli", "frances": "Caresse tes cheveux" },
    { "español": "Toca tu oreja derecha", "ingles": "Touch your right ear", "alemán": "Fass dein rechtes Ohr an", "italiano": "Toccati l'orecchio destro", "frances": "Touche ton oreille droite" },
    { "español": "Levanta la mano derecha", "ingles": "Raise your right hand", "alemán": "Heb deine rechte Hand", "italiano": "Alza la mano destra", "frances": "Lève ta main droite" },
    { "español": "Levanta la mano izquierda", "ingles": "Raise your left hand", "alemán": "Heb deine linke Hand", "italiano": "Alza la mano sinistra", "frances": "Lève ta main gauche" },
    { "español": "Baja la mano derecha", "ingles": "Lower your right hand", "alemán": "Senk deine rechte Hand", "italiano": "Abbassa la mano destra", "frances": "Abaisse ta main droite" },
    { "español": "Baja la mano izquierda", "ingles": "Lower your left hand", "alemán": "Senk deine linke Hand", "italiano": "Abbassa la mano sinistra", "frances": "Abaisse ta main gauche" },
    { "español": "Aplaude dos veces", "ingles": "Clap twice", "alemán": "Klatsche zweimal", "italiano": "Batti le mani due volte", "frances": "Applaudis deux fois" },
    { "español": "Da un salto pequeño", "ingles": "Do a small jump", "alemán": "Mache einen kleinen Sprung", "italiano": "Fai un piccolo salto", "frances": "Fais un petit saut" },
    { "español": "Gira tu cuerpo a la derecha", "ingles": "Turn your body to the right", "alemán": "Dreh deinen Körper nach rechts", "italiano": "Gira il corpo a destra", "frances": "Tourne ton corps à droite" },
    { "español": "Gira tu cuerpo a la izquierda", "ingles": "Turn your body to the left", "alemán": "Dreh deinen Körper nach links", "italiano": "Gira il corpo a sinistra", "frances": "Tourne ton corps à gauche" },
    { "español": "Inclina tu cabeza hacia adelante", "ingles": "Tilt your head forward", "alemán": "Neige deinen Kopf nach vorne", "italiano": "Inclina la testa in avanti", "frances": "Incline ta tête vers l'avant" },
    { "español": "Inclina tu cabeza hacia atrás", "ingles": "Tilt your head backward", "alemán": "Neige deinen Kopf nach hinten", "italiano": "Inclina la testa indietro", "frances": "Incline ta tête vers l'arrière" },
    { "español": "Estira tus brazos", "ingles": "Stretch your arms", "alemán": "Strecke deine Arme", "italiano": "Allunga le braccia", "frances": "Étends tes bras" },
    { "español": "Relaja tus brazos", "ingles": "Relax your arms", "alemán": "Entspanne deine Arme", "italiano": "Rilassa le braccia", "frances": "Détends tes bras" },
    { "español": "Ríe fuerte", "ingles": "Laugh loudly", "alemán": "Lache laut", "italiano": "Ridi forte", "frances": "Rie fort" },
    { "español": "Sonríe", "ingles": "Smile", "alemán": "Lächle", "italiano": "Sorridi", "frances": "Souris" },
    { "español": "Cierra los ojos", "ingles": "Close your eyes", "alemán": "Schließe deine Augen", "italiano": "Chiudi gli occhi", "frances": "Ferme les yeux" },
    { "español": "Abre los ojos lentamente", "ingles": "Open your eyes slowly", "alemán": "Öffne deine Augen langsam", "italiano": "Apri lentamente gli occhi", "frances": "Ouvre lentement les yeux" },
    { "español": "Frota tus manos", "ingles": "Rub your hands", "alemán": "Reibe deine Hände", "italiano": "Strofina le mani", "frances": "Frotte tes mains" },
    { "español": "Sacude tus piernas", "ingles": "Shake your legs", "alemán": "Schüttle deine Beine", "italiano": "Scuoti le gambe", "frances": "Secoue tes jambes" },
    { "español": "Cruza tus brazos", "ingles": "Cross your arms", "alemán": "Verschränke deine Arme", "italiano": "Incastra le braccia", "frances": "Croise tes bras" },
    { "español": "Estira tus piernas", "ingles": "Stretch your legs", "alemán": "Strecke deine Beine", "italiano": "Allunga le gambe", "frances": "Étends tes jambes" },
    { "español": "Gira tu muñeca derecha", "ingles": "Rotate your right wrist", "alemán": "Drehe dein rechtes Handgelenk", "italiano": "Ruota il polso destro", "frances": "Fais tourner ton poignet droit" },
    { "español": "Gira tu muñeca izquierda", "ingles": "Rotate your left wrist", "alemán": "Drehe dein linkes Handgelenk", "italiano": "Ruota il polso sinistro", "frances": "Fais tourner ton poignet gauche" },
    { "español": "Mueve tus dedos de la mano derecha", "ingles": "Move your right hand fingers", "alemán": "Bewege die Finger deiner rechten Hand", "italiano": "Muovi le dita della mano destra", "frances": "Bouge les doigts de ta main droite" },
    { "español": "Mueve tus dedos de la mano izquierda", "ingles": "Move your left hand fingers", "alemán": "Bewege die Finger deiner linken Hand", "italiano": "Muovi le dita della mano sinistra", "frances": "Bouge les doigts de ta main gauche" },
    { "español": "Levanta la ceja derecha", "ingles": "Raise your right eyebrow", "alemán": "Heb deine rechte Augenbraue", "italiano": "Alza la sopracciglia destra", "frances": "Lève ton sourcil droit" },
    { "español": "Levanta la ceja izquierda", "ingles": "Raise your left eyebrow", "alemán": "Heb deine linke Augenbraue", "italiano": "Alza la sopracciglia sinistra", "frances": "Lève ton sourcil gauche" },
    { "español": "Aprieta tus puños", "ingles": "Clench your fists", "alemán": "Ball deine Fäuste", "italiano": "Stringi i pugni", "frances": "Serre tes poings" },
    { "español": "Relaja tus puños", "ingles": "Relax your fists", "alemán": "Entspanne deine Fäuste", "italiano": "Rilassa i pugni", "frances": "Détends tes poings" },
    { "español": "Toca tu nariz", "ingles": "Touch your nose", "alemán": "Berühre deine Nase", "italiano": "Tocca il naso", "frances": "Touche ton nez" },
    { "español": "Toca tu barbilla", "ingles": "Touch your chin", "alemán": "Berühre dein Kinn", "italiano": "Tocca il mento", "frances": "Touche ton menton" },
    { "español": "Estira el cuello", "ingles": "Stretch your neck", "alemán": "Strecke deinen Hals", "italiano": "Allunga il collo", "frances": "Étends ton cou" },
    { "español": "Flexiona el cuello", "ingles": "Flex your neck", "alemán": "Beuge deinen Hals", "italiano": "Piegati il collo", "frances": "Plie ton cou" },
    { "español": "Gira la cabeza lentamente", "ingles": "Slowly turn your head", "alemán": "Drehe deinen Kopf langsam", "italiano": "Ruota lentamente la testa", "frances": "Tourne lentement ta tête" },
    { "español": "Toca tu hombro izquierdo", "ingles": "Touch your left shoulder", "alemán": "Berühre deine linke Schulter", "italiano": "Tocca la spalla sinistra", "frances": "Touche ton épaule gauche" },
    { "español": "Toca tu hombro derecho", "ingles": "Touch your right shoulder", "alemán": "Berühre deine rechte Schulter", "italiano": "Tocca la spalla destra", "frances": "Touche ton épaule droite" },
    { "español": "Golpea ligeramente la mesa", "ingles": "Tap the table lightly", "alemán": "Klopfe leicht auf den Tisch", "italiano": "Batti leggermente il tavolo", "frances": "Tape légèrement sur la table" },
    { "español": "Da palmadas en tus piernas", "ingles": "Pat your legs", "alemán": "Klopfe auf deine Beine", "italiano": "Batti sulle gambe", "frances": "Tape sur tes jambes" },
    { "español": "Haz una mueca divertida", "ingles": "Make a funny face", "alemán": "Mache ein lustiges Gesicht", "italiano": "Fai una smorfia divertente", "frances": "Fais une grimace amusante" },
    { "español": "Levanta la pierna derecha", "ingles": "Raise your right leg", "alemán": "Heb dein rechtes Bein", "italiano": "Alza la gamba destra", "frances": "Lève ta jambe droite" },
    { "español": "Levanta la pierna izquierda", "ingles": "Raise your left leg", "alemán": "Heb dein linkes Bein", "italiano": "Alza la gamba sinistra", "frances": "Lève ta jambe gauche" },
    { "español": "Estira tu espalda", "ingles": "Stretch your back", "alemán": "Strecke deinen Rücken", "italiano": "Allunga la schiena", "frances": "Étends ton dos" },
    { "español": "Arquea la espalda", "ingles": "Arch your back", "alemán": "Wölbe deinen Rücken", "italiano": "Inarca la schiena", "frances": "Cambriole ton dos" },
    { "español": "Gira el torso a la derecha", "ingles": "Turn your torso to the right", "alemán": "Dreh deinen Oberkörper nach rechts", "italiano": "Gira il busto a destra", "frances": "Tourne ton torse à droite" },
    { "español": "Gira el torso a la izquierda", "ingles": "Turn your torso to the left", "alemán": "Dreh deinen Oberkörper nach links", "italiano": "Gira il busto a sinistra", "frances": "Tourne ton torse à gauche" },
    { "español": "Respira profundamente", "ingles": "Breathe deeply", "alemán": "Atme tief ein", "italiano": "Respira profondamente", "frances": "Respire profondément" },
    { "español": "Exhala lentamente", "ingles": "Exhale slowly", "alemán": "Atme langsam aus", "italiano": "Espira lentamente", "frances": "Expire lentement" },
    { "español": "Mueve tus caderas", "ingles": "Move your hips", "alemán": "Bewege deine Hüften", "italiano": "Muovi i fianchi", "frances": "Bouge tes hanches" },
    { "español": "Gira tus caderas a la derecha", "ingles": "Rotate your hips to the right", "alemán": "Dreh deine Hüften nach rechts", "italiano": "Ruota i fianchi a destra", "frances": "Fais tourner tes hanches à droite" },
    { "español": "Gira tus caderas a la izquierda", "ingles": "Rotate your hips to the left", "alemán": "Dreh deine Hüften nach links", "italiano": "Ruota i fianchi a sinistra", "frances": "Fais tourner tes hanches à gauche" },
    { "español": "Levanta los talones", "ingles": "Lift your heels", "alemán": "Heb deine Fersen", "italiano": "Solleva i talloni", "frances": "Lève tes talons" },
    { "español": "Pisa fuerte el suelo", "ingles": "Stomp the ground firmly", "alemán": "Stampfe fest auf den Boden", "italiano": "Calpesta il pavimento con forza", "frances": "Frappe le sol fermement" },
    { "español": "Toca el suelo con la mano", "ingles": "Touch the ground with your hand", "alemán": "Berühre den Boden mit deiner Hand", "italiano": "Tocca il pavimento con la mano", "frances": "Touche le sol avec ta main" },
    { "español": "Estira tu brazo derecho hacia adelante", "ingles": "Extend your right arm forward", "alemán": "Strecke deinen rechten Arm nach vorne", "italiano": "Stendi il braccio destro in avanti", "frances": "Tends ton bras droit vers l'avant" },
    { "español": "Estira tu brazo izquierdo hacia adelante", "ingles": "Extend your left arm forward", "alemán": "Strecke deinen linken Arm nach vorne", "italiano": "Stendi il braccio sinistro in avanti", "frances": "Tends ton bras gauche vers l'avant" },
    { "español": "Levanta tus rodillas alternadamente", "ingles": "Lift your knees alternately", "alemán": "Heb abwechselnd deine Knie", "italiano": "Alza le ginocchia alternativamente", "frances": "Lève alternativement tes genoux" },
    { "español": "Haz un pequeño trote en el lugar", "ingles": "Jog in place", "alemán": "Jogge auf der Stelle", "italiano": "Corri sul posto", "frances": "Cours sur place" },
    { "español": "Mueve tu cabeza de lado a lado", "ingles": "Move your head side to side", "alemán": "Bewege deinen Kopf von Seite zu Seite", "italiano": "Muovi la testa da un lato all'altro", "frances": "Bouge ta tête de côté en côté" },
    { "español": "Toca tu rodilla con la mano derecha", "ingles": "Touch your right knee with your hand", "alemán": "Berühre dein rechtes Knie mit deiner Hand", "italiano": "Tocca il ginocchio destro con la mano", "frances": "Touche ton genou droit avec ta main" },
    { "español": "Toca tu rodilla con la mano izquierda", "ingles": "Touch your left knee with your hand", "alemán": "Berühre dein linkes Knie mit deiner Hand", "italiano": "Tocca il ginocchio sinistro con la mano", "frances": "Touche ton genou gauche avec ta main" },
    { "español": "Haz una pausa y respira", "ingles": "Pause and breathe", "alemán": "Mache eine Pause und atme", "italiano": "Fai una pausa e respira", "frances": "Fais une pause et respire" },
    { "español": "Ríe y mueve los hombros", "ingles": "Laugh and move your shoulders", "alemán": "Lache und bewege deine Schultern", "italiano": "Ridi e muovi le spalle", "frances": "Rie et bouge tes épaules" },
    { "español": "Toca tu oreja izquierda", "ingles": "Touch your left ear", "alemán": "Berühre dein linkes Ohr", "italiano": "Tocca l'orecchio sinistro", "frances": "Touche ton oreille gauche" },
    { "español": "Haz un gesto de sorpresa", "ingles": "Make a surprised gesture", "alemán": "Mache eine überraschte Geste", "italiano": "Fai un gesto di sorpresa", "frances": "Fais un geste de surprise" },
    { "español": "Mueve tus labios en forma de sonrisa", "ingles": "Move your lips in a smiling shape", "alemán": "Bewege deine Lippen zu einem Lächeln", "italiano": "Muovi le labbra a formare un sorriso", "frances": "Fais un sourire avec tes lèvres" },
    { "español": "Parpadea rápidamente", "ingles": "Blink rapidly", "alemán": "Blinke schnell", "italiano": "Sbatti le palpebre velocemente", "frances": "Cligne rapidement des yeux" },
    { "español": "Finge que aplaudes suavemente", "ingles": "Pretend to clap softly", "alemán": "Tue so, als würdest du leise klatschen", "italiano": "Fingi di battere le mani dolcemente", "frances": "Fais semblant d'applaudir doucement" },
    { "español": "Imita un gesto de victoria", "ingles": "Imitate a victory gesture", "alemán": "Ahme einen Siegesgestus", "italiano": "Imita un gesto di vittoria", "frances": "Imite un geste de victoire" },
    { "español": "Estira tus brazos hacia arriba", "ingles": "Stretch your arms upward", "alemán": "Strecke deine Arme nach oben", "italiano": "Allunga le braccia verso l'alto", "frances": "Étends tes bras vers le haut" },
    { "español": "Inclina tu cuerpo hacia la derecha", "ingles": "Lean your body to the right", "alemán": "Lehne deinen Körper nach rechts", "italiano": "Inclina il corpo a destra", "frances": "Penche ton corps à droite" },
    { "español": "Inclina tu cuerpo hacia la izquierda", "ingles": "Lean your body to the left", "alemán": "Lehne deinen Körper nach links", "italiano": "Inclina il corpo a sinistra", "frances": "Penche ton corps à gauche" },
    { "español": "Haz una reverencia", "ingles": "Bow", "alemán": "Mache eine Verbeugung", "italiano": "Fai una riverenza", "frances": "Fais une révérence" },
    { "español": "Frota tu frente con suavidad", "ingles": "Rub your forehead gently", "alemán": "Reibe sanft deine Stirn", "italiano": "Strofina delicatamente la fronte", "frances": "Frotte doucement ton front" },
    { "español": "Golpea suavemente tu rodilla", "ingles": "Tap your knee lightly", "alemán": "Klopfe leicht auf dein Knie", "italiano": "Batti leggermente il ginocchio", "frances": "Tape légèrement sur ton genou" },
    { "español": "Extiende tu mano hacia adelante", "ingles": "Extend your hand forward", "alemán": "Strecke deine Hand nach vorne aus", "italiano": "Stendi la mano in avanti", "frances": "Tends ta main vers l'avant" },
    { "español": "Estira tu dedo índice", "ingles": "Stretch your index finger", "alemán": "Strecke deinen Zeigefinger", "italiano": "Allunga il dito indice", "frances": "Étends ton index" },
    { "español": "Toca tu codo derecho", "ingles": "Touch your right elbow", "alemán": "Berühre deinen rechten Ellbogen", "italiano": "Tocca il gomito destro", "frances": "Touche ton coude droit" },
    { "español": "Toca tu codo izquierdo", "ingles": "Touch your left elbow", "alemán": "Berühre deinen linken Ellbogen", "italiano": "Tocca il gomito sinistro", "frances": "Touche ton coude gauche" },
    { "español": "Acaricia tu mejilla", "ingles": "Stroke your cheek", "alemán": "Streichele deine Wange", "italiano": "Accarezza la guancia", "frances": "Caresse ta joue" },
    { "español": "Mueve tu lengua sin pronunciar sonido", "ingles": "Move your tongue without making a sound", "alemán": "Bewege deine Zunge, ohne einen Ton zu machen", "italiano": "Muovi la lingua senza emettere suono", "frances": "Bouge ta langue sans faire de bruit" },
    { "español": "Respira hondo y relájate", "ingles": "Take a deep breath and relax", "alemán": "Atme tief ein und entspanne dich", "italiano": "Respira profondamente e rilassati", "frances": "Respire profondément et détends-toi" }
  ]
};


const palabrasInstrucciones = {
  "reinforcement": {
"verbos": {
  "español": [
    "quítate", "ponte", "levanta", "mira", "pon", "tócate", "mueve",
    "muerde", "abraza", "acaricia", "toca", "baja", "aplaude", "da",
    "gira", "inclina", "estira", "relaja", "ríe", "sonríe", "cierra",
    "abre", "frota", "sacude", "cruza", "flexiona", "aprieta", "golpea",
    "haz", "arquea", "respira", "exhala", "pisa", "parpadea", "finge",
    "imita", "extiende"
  ],
  "ingles": [
    "take off", "put on", "raise", "look", "put", "touch", "move",
    "bite", "hug", "stroke", "touch", "lower", "clap", "do",
    "turn", "tilt", "stretch", "relax", "laugh", "smile", "close",
    "open", "rub", "shake", "cross", "flex", "clench", "hit",
    "do", "arch", "breathe", "exhale", "step", "blink", "pretend",
    "imitate", "extend"
  ],
  "alemán": [
    "zieh aus", "zieh an", "heb", "schau", "leg", "fass an", "bewege",
    "beiß", "umarme", "streichele", "berühre", "senk", "klatsche", "mache",
    "dreh", "neige", "strecke", "entspanne", "lache", "lächle", "schließe",
    "öffne", "reibe", "schüttle", "verschränke", "flektiere", "ball", "schlag",
    "mache", "wölbe", "atme", "exhaliere", "tritt", "blinke", "ahme",
    "imitiere", "erstrecke"
  ],
  "italiano": [
    "togliti", "metti", "alza", "guarda", "metti", "toccati", "muovi",
    "morditi", "abbraccia", "accarezza", "tocca", "abbassa", "batti", "dai",
    "gira", "inclina", "allunga", "rilassa", "ridi", "sorridi", "chiudi",
    "apri", "strofina", "scuoti", "incrocia", "fletti", "stringi", "colpisci",
    "fai", "inarca", "respira", "espira", "calpesta", "sbatti", "fingi",
    "imita", "estendi"
  ],
  "frances": [
    "enlève", "mets", "lève", "regarde", "pose", "touche", "bouge",
    "mords", "embrasse", "caresse", "touche", "abaisse", "applaudis", "fais",
    "tourne", "incline", "étends", "détends", "ris", "souris", "ferme",
    "ouvre", "frotte", "secoue", "croise", "fléchis", "serre", "frappe",
    "fais", "arquez", "respire", "expire", "piétine", "cligne", "prétends",
    "imite", "étends"
  ]
},
"sustantivos": {
  "español": [
    "zapato", "dedo pulgar", "dedo meñique", "frente", "lápiz", "mesa",
    "cuaderno", "hombro", "cabeza", "mano", "pie", "pierna", "pareja",
    "amigo", "cabello", "oreja", "salto", "cuerpo", "brazo", "ojo",
    "mueca", "espalda", "torso", "cadera", "talón", "suelo", "rodilla",
    "trote", "pausa", "gesto", "sorpresa", "labio", "sonrisa", "victoria",
    "reverencia", "dedo índice", "codo", "mejilla", "lengua", "sonido",
    "muñeca", "dedo", "ceja", "puño"
  ],
  "ingles": [
    "shoe", "thumb", "pinky", "front", "pencil", "table",
    "notebook", "shoulder", "head", "hand", "foot", "leg", "partner",
    "friend", "hair", "ear", "jump", "body", "arm", "eye",
    "grimace", "back", "torso", "hip", "heel", "ground", "knee",
    "jog", "pause", "gesture", "surprise", "lip", "smile", "victory",
    "bow", "index finger", "elbow", "cheek", "tongue", "sound",
    "wrist", "finger", "eyebrow", "fist"
  ],
  "alemán": [
    "der Schuh", "der Daumen", "der kleine Finger", "die Front", "der Bleistift", "der Tisch",
    "das Notizbuch", "die Schulter", "der Kopf", "die Hand", "der Fuß", "das Bein", "der Partner",
    "der Freund", "das Haar", "das Ohr", "der Sprung", "der Körper", "der Arm", "das Auge",
    "die Grimasse", "der Rücken", "der Torso", "die Hüfte", "die Ferse", "der Boden", "das Knie",
    "das Joggen", "die Pause", "die Geste", "die Überraschung", "die Lippe", "das Lächeln", "der Sieg",
    "die Verbeugung", "der Zeigefinger", "der Ellbogen", "die Wange", "die Zunge", "der Klang",
    "das Handgelenk", "der Finger", "die Augenbraue", "die Faust"
  ],
  "italiano": [
    "scarpa", "pollice", "mignolo", "fronte", "matita", "tavolo",
    "quaderno", "spalla", "testa", "mano", "piede", "gamba", "partner",
    "amico", "capelli", "orecchio", "salto", "corpo", "braccio", "occhio",
    "smorfia", "schiena", "busto", "anca", "tallone", "pavimento", "ginocchio",
    "trotto", "pausa", "gesto", "sorpresa", "labbro", "sorriso", "vittoria",
    "riverenza", "dito indice", "gomito", "guancia", "lingua", "suono",
    "polso", "dito", "sopracciglia", "pugno"
  ],
  "frances": [
    "chaussure", "pouce", "petit doigt", "front", "crayon", "table",
    "cahier", "épaule", "tête", "main", "pied", "jambe", "partenaire",
    "ami", "cheveux", "oreille", "saut", "corps", "bras", "œil",
    "grimace", "dos", "torse", "hanche", "talon", "sol", "genou",
    "trot", "pause", "geste", "surprise", "lèvre", "sourire", "victoire",
    "révérence", "index", "coude", "joue", "langue", "bruit",
    "poignet", "doigt", "sourcil", "poing"
  ]
}
}
};



const frases = {
  "cocina": [
    {
      "español": "[Yo] {Voy a cortar} (las verduras)",
      "ingles": "[I] {am going to chop} (the vegetables)",
      "alemán": "[Ich] {werde schneiden} (das Gemüse)",
      "italiano": "[Io] {taglierò} (le verdure)",
      "frances": "[Je] {vais couper} (les légumes)"
    },
    {
      "español": "[Yo] {Debo rallar} (el queso)",
      "ingles": "[I] {have to grate} (the cheese)",
      "alemán": "[Ich] {muss reiben} (den Käse)",
      "italiano": "[Io] {devo grattugiare} (il formaggio)",
      "frances": "[Je] {dois râper} (le fromage)"
    },
    {
      "español": "[Yo] {Haré} (sopa de pollo)",
      "ingles": "[I] {will make} (chicken soup)",
      "alemán": "[Ich] {werde machen} (Hühnersuppe)",
      "italiano": "[Io] {farò} (la zuppa di pollo)",
      "frances": "[Je] {ferai} (de la soupe au poulet)"
    },
    {
      "español": "[Yo] {Prepararé} (lentejas para el almuerzo)",
      "ingles": "[I] {will prepare} (lentils for lunch)",
      "alemán": "[Ich] {werde zubereiten} (Linsen zum Mittagessen)",
      "italiano": "[Io] {preparerò} (le lenticchie per pranzo)",
      "frances": "[Je] {préparerai} (des lentilles pour le déjeuner)"
    },
    {
      "español": "[Yo] {Haré} (muffins para desayunar)",
      "ingles": "[I] {will make} (muffins for breakfast)",
      "alemán": "[Ich] {werde machen} (Muffins zum Frühstück)",
      "italiano": "[Io] {farò} (i muffin per colazione)",
      "frances": "[Je] {ferai} (des muffins pour le petit-déjeuner)"
    },
    {
      "español": "[Yo] {Haré} (un café con leche)",
      "ingles": "[I] {will make} (a coffee with milk)",
      "alemán": "[Ich] {werde machen} (einen Kaffee mit Milch)",
      "italiano": "[Io] {farò} (un caffè latte)",
      "frances": "[Je] {ferai} (un café au lait)"
    },
    {
      "español": "[Yo] {Haré} (un té caliente para evitar un resfriado)",
      "ingles": "[I] {will make} (a hot tea to avoid a cold)",
      "alemán": "[Ich] {werde machen} (einen heißen Tee, um eine Erkältung zu vermeiden)",
      "italiano": "[Io] {farò} (una tisana calda per evitare il raffreddore)",
      "frances": "[Je] {ferai} (un thé chaud pour éviter un rhume)"
    },
    {
      "español": "(Hay) {carne y pollo} (en la nevera)",
      "ingles": "(There) {is} (meat and chicken in the fridge)",
      "alemán": "(Es) {gibt} (Fleisch und Hühnchen im Kühlschrank)",
      "italiano": "(C'è) {carne e pollo} (nel frigorifero)",
      "frances": "(Il y a) {de la viande et du poulet} (dans le réfrigérateur)"
    },
    {
      "español": "[Yo] {Voy a botar} (la basura hoy)",
      "ingles": "[I] {am going to throw out} (the trash today)",
      "alemán": "[Ich] {werde rausbringen} (den Müll heute)",
      "italiano": "[Io] {vado a buttare} (la spazzatura oggi)",
      "frances": "[Je] {vais jeter} (les ordures aujourd'hui)"
    },
    {
      "español": "[Yo] {Meteré} (la tarta en la nevera)",
      "ingles": "[I] {will put} (the cake in the fridge)",
      "alemán": "[Ich] {werde stellen} (den Kuchen in den Kühlschrank)",
      "italiano": "[Io] {metterò} (la torta in frigo)",
      "frances": "[Je] {mettrai} (le gâteau au réfrigérateur)"
    }
  ],
  "comedor": [
    {
      "español": "[Tú] {Ayúdame a traer} (los cubiertos y servilletas)",
      "ingles": "[You] {Help me bring} (the cutlery and napkins)",
      "alemán": "[Du] {Hilf mir, zu bringen} (das Besteck und die Servietten)",
      "italiano": "[Tu] {Aiutami a portare} (le posate e i tovaglioli)",
      "frances": "[Tu] {Aide-moi à apporter} (les couverts et les serviettes)"
    },
    {
      "español": "[Tú] {Te gusta} (la comida?)",
      "ingles": "[Do you] {like} (the food?)",
      "alemán": "[Du] {Magst} (das Essen?)",
      "italiano": "[Tu] {Ti piace} (il cibo?)",
      "frances": "[Tu] {Aimes} (la nourriture?)"
    },
    {
      "español": "[Tú] {Qué te gustó más} (de la comida?)",
      "ingles": "[What did you] {like most} (about the food?)",
      "alemán": "[Was hat dir] {am besten gefallen} (am Essen?)",
      "italiano": "[Cosa ti] {è piaciuto di più} (del cibo?)",
      "frances": "[Qu'est-ce que tu as] {préféré} (dans le repas?)"
    },
    {
      "español": "[Tú] {Quieres} (un vaso con agua?)",
      "ingles": "[Do you] {want} (a glass of water?)",
      "alemán": "[Du] {Möchtest} (ein Glas Wasser?)",
      "italiano": "[Tu] {Vuoi} (un bicchiere d'acqua?)",
      "frances": "[Tu] {veux} (un verre d'eau?)"
    },
    {
      "español": "[Tú] {Quieres comer} (el postre?)",
      "ingles": "[Do you] {want to eat} (dessert?)",
      "alemán": "[Du] {Möchtest essen} (den Nachtisch?)",
      "italiano": "[Tu] {Vuoi mangiare} (il dolce?)",
      "frances": "[Tu] {veux manger} (le dessert?)"
    },
    {
      "español": "[Tú] {Quedaste} (con hambre?)",
      "ingles": "[Are you] {still hungry?}",
      "alemán": "[Hast du] {noch Hunger?}",
      "italiano": "[Sei rimasto] {con fame?}",
      "frances": "[Tu as] {encore faim?}"
    },
    {
      "español": "[Tú] {Me pasas} (el cuchillo)",
      "ingles": "[You] {Pass me} (the knife)",
      "alemán": "[Du] {Gib mir} (das Messer)",
      "italiano": "[Tu] {Mi passi} (il coltello)",
      "frances": "[Tu] {Passe-moi} (le couteau)"
    },
    {
      "español": "[La mesa] {está sucia} (, ¿podrías limpiarla?)",
      "ingles": "[The table] {is dirty} (, could you clean it?)",
      "alemán": "[Der Tisch] {ist schmutzig} (, könntest du ihn abwischen?)",
      "italiano": "[Il tavolo] {è sporco} (, potresti pulirlo?)",
      "frances": "[La table] {est sale} (, pourrais-tu la nettoyer?)"
    },
    {
      "español": "[Yo] {Agradezco} (la comida, quedó sabrosa)",
      "ingles": "[I] {thank you} (for the food, it was delicious)",
      "alemán": "[Ich] {danke dir} (für das Essen, es war lecker)",
      "italiano": "[Io] {ti ringrazio} (per il cibo, era delizioso)",
      "frances": "[Je] {te remercie} (pour le repas, c'était délicieux)"
    }
  ],
  "dormitorio": [
    {
      "español": "[Yo] {Voy a tender} (la cama)",
      "ingles": "[I] {am going to make} (the bed)",
      "alemán": "[Ich] {werde machen} (das Bett)",
      "italiano": "[Io] {farò} (il letto)",
      "frances": "[Je] {vais faire} (le lit)"
    },
    {
      "español": "[Yo] {Necesito cambiar} (las sábanas)",
      "ingles": "[I] {need to change} (the sheets)",
      "alemán": "[Ich] {muss wechseln} (die Bettwäsche)",
      "italiano": "[Io] {devo cambiare} (le lenzuola)",
      "frances": "[Je] {dois changer} (les draps)"
    },
    {
      "español": "[La ventana] {está cerrada}, (voy a abrirla)",
      "ingles": "[The window] {is closed}, (I will open it)",
      "alemán": "[Das Fenster] {ist geschlossen}, (ich werde es öffnen)",
      "italiano": "[La finestra] {è chiusa}, (la aprirò)",
      "frances": "[La fenêtre] {est fermée}, (je vais l'ouvrir)"
    },
    {
      "español": "[Yo] {Debo ordenar} (el armario)",
      "ingles": "[I] {must organize} (the closet)",
      "alemán": "[Ich] {muss aufräumen} (den Schrank)",
      "italiano": "[Io] {devo ordinare} (l'armadio)",
      "frances": "[Je] {dois ranger} (l'armoire)"
    },
    {
      "español": "[La lámpara] {no funciona} (necesito cambiarla)",
      "ingles": "[The lamp] {doesn't work} (I need to change it)",
      "alemán": "[Die Lampe] {funktioniert nicht} (ich muss sie wechseln)",
      "italiano": "[La lampada] {non funziona} (devo cambiarla)",
      "frances": "[La lampe] {ne marche pas} (je dois la changer)"
    },
    {
      "español": "[Yo] {Voy a poner} (una alarma para mañana)",
      "ingles": "[I] {am going to set} (an alarm for tomorrow)",
      "alemán": "[Ich] {werde stellen} (einen Wecker für morgen)",
      "italiano": "[Io] {metterò} (una sveglia per domani)",
      "frances": "[Je] {vais mettre} (une alarme pour demain)"
    },
    {
      "español": "[El aire acondicionado] {está muy frío} (voy a ajustarlo)",
      "ingles": "[The air conditioning] {is too cold} (I will adjust it)",
      "alemán": "[Die Klimaanlage] {ist zu kalt} (ich werde sie anpassen)",
      "italiano": "[Il condizionatore] {è troppo freddo} (lo regolerò)",
      "frances": "[La climatisation] {est trop froide} (je vais l'ajuster)"
    }
],

"baño": [
    {
      "español": "[Yo] {Necesito limpiar} (el espejo)",
      "ingles": "[I] {need to clean} (the mirror)",
      "alemán": "[Ich] {muss putzen} (den Spiegel)",
      "italiano": "[Io] {devo pulire} (lo specchio)",
      "frances": "[Je] {dois nettoyer} (le miroir)"
    },
    {
      "español": "[Yo] {Voy a ducharme} (ahora)",
      "ingles": "[I] {am going to shower} (now)",
      "alemán": "[Ich] {werde duschen} (jetzt)",
      "italiano": "[Io] {farò la doccia} (adesso)",
      "frances": "[Je] {vais prendre une douche} (maintenant)"
    },
    {
      "español": "[No] {hay papel higiénico} (en el baño)",
      "ingles": "[There] {is no toilet paper} (in the bathroom)",
      "alemán": "[Es] {gibt kein Toilettenpapier} (im Bad)",
      "italiano": "[Non] {c'è carta igienica} (in bagno)",
      "frances": "[Il n'y a] {pas de papier toilette} (dans la salle de bain)"
    },
    {
      "español": "[El agua] {está fría} (hay que esperar)",
      "ingles": "[The water] {is cold} (we have to wait)",
      "alemán": "[Das Wasser] {ist kalt} (wir müssen warten)",
      "italiano": "[L'acqua] {è fredda} (dobbiamo aspettare)",
      "frances": "[L'eau] {est froide} (il faut attendre)"
    },
    {
      "español": "[Yo] {Necesito cambiar} (la cortina de la ducha)",
      "ingles": "[I] {need to change} (the shower curtain)",
      "alemán": "[Ich] {muss wechseln} (den Duschvorhang)",
      "italiano": "[Io] {devo cambiare} (la tenda della doccia)",
      "frances": "[Je] {dois changer} (le rideau de douche)"
    },
    {
      "español": "[El lavamanos] {está goteando} (hay que llamar al plomero)",
      "ingles": "[The sink] {is dripping} (we need to call the plumber)",
      "alemán": "[Das Waschbecken] {tropft} (wir müssen den Klempner rufen)",
      "italiano": "[Il lavandino] {gocciola} (dobbiamo chiamare l'idraulico)",
      "frances": "[Le lavabo] {goutte} (il faut appeler le plombier)"
    },
    {
      "español": "[Yo] {Voy a lavar} (las toallas)",
      "ingles": "[I] {am going to wash} (the towels)",
      "alemán": "[Ich] {werde waschen} (die Handtücher)",
      "italiano": "[Io] {laverò} (gli asciugamani)",
      "frances": "[Je] {vais laver} (les serviettes)"
    }
],

"sala": [
    {
      "español": "[Yo] {Voy a ver} (una película)",
      "ingles": "[I] {am going to watch} (a movie)",
      "alemán": "[Ich] {werde schauen} (einen Film)",
      "italiano": "[Io] {guarderò} (un film)",
      "frances": "[Je] {vais regarder} (un film)"
    },
    {
      "español": "[El control remoto] {está} (sobre la mesa)",
      "ingles": "[The remote control] {is} (on the table)",
      "alemán": "[Die Fernbedienung] {ist} (auf dem Tisch)",
      "italiano": "[Il telecomando] {è} (sul tavolo)",
      "frances": "[La télécommande] {est} (sur la table)"
    },
    {
      "español": "[Tú] {Puedes bajar} (el volumen)",
      "ingles": "[You] {Can lower} (the volume)",
      "alemán": "[Du] {Kannst senken} (die Lautstärke)",
      "italiano": "[Tu] {Puoi abbassare} (il volume)",
      "frances": "[Tu] {Peux baisser} (le volume)"
    },
    {
      "español": "[Las cortinas] {están sucias} (hay que lavarlas)",
      "ingles": "[The curtains] {are dirty} (we need to wash them)",
      "alemán": "[Die Vorhänge] {sind schmutzig} (wir müssen sie waschen)",
      "italiano": "[Le tende] {sono sporche} (dobbiamo lavarle)",
      "frances": "[Les rideaux] {sont sales} (il faut les laver)"
    },
    {
      "español": "[Yo] {Voy a aspirar} (la alfombra)",
      "ingles": "[I] {am going to vacuum} (the carpet)",
      "alemán": "[Ich] {werde staubsaugen} (den Teppich)",
      "italiano": "[Io] {aspirerò} (il tappeto)",
      "frances": "[Je] {vais aspirer} (le tapis)"
    },
    {
      "español": "[Los invitados] {llegarán} (en una hora)",
      "ingles": "[The guests] {will arrive} (in an hour)",
      "alemán": "[Die Gäste] {werden ankommen} (in einer Stunde)",
      "italiano": "[Gli ospiti] {arriveranno} (tra un'ora)",
      "frances": "[Les invités] {arriveront} (dans une heure)"
    },
    {
      "español": "[El sofá] {necesita} (una limpieza)",
      "ingles": "[The sofa] {needs} (cleaning)",
      "alemán": "[Das Sofa] {braucht} (eine Reinigung)",
      "italiano": "[Il divano] {ha bisogno di} (una pulizia)",
      "frances": "[Le canapé] {a besoin d'} (un nettoyage)"
    }
],

"oficina": [
    {
      "español": "[Yo] {Necesito imprimir} (estos documentos)",
      "ingles": "[I] {need to print} (these documents)",
      "alemán": "[Ich] {muss drucken} (diese Dokumente)",
      "italiano": "[Io] {devo stampare} (questi documenti)",
      "frances": "[Je] {dois imprimer} (ces documents)"
    },
    {
      "español": "[La computadora] {está lenta} (hoy)",
      "ingles": "[The computer] {is slow} (today)",
      "alemán": "[Der Computer] {ist langsam} (heute)",
      "italiano": "[Il computer] {è lento} (oggi)",
      "frances": "[L'ordinateur] {est lent} (aujourd'hui)"
    },
    {
      "español": "[Yo] {Tengo una reunión} (a las 3)",
      "ingles": "[I] {have a meeting} (at 3)",
      "alemán": "[Ich] {habe ein Meeting} (um 3)",
      "italiano": "[Io] {ho una riunione} (alle 3)",
      "frances": "[J'] {ai une réunion} (à 3 heures)"
    },
    {
      "español": "[La impresora] {se quedó sin tinta} (hay que cambiarla)",
      "ingles": "[The printer] {ran out of ink} (we need to change it)",
      "alemán": "[Der Drucker] {hat keine Tinte mehr} (wir müssen sie wechseln)",
      "italiano": "[La stampante] {è rimasta senza inchiostro} (dobbiamo cambiarla)",
      "frances": "[L'imprimante] {n'a plus d'encre} (il faut la changer)"
    },
    {
      "español": "[Yo] {Necesito organizar} (estos archivos)",
      "ingles": "[I] {need to organize} (these files)",
      "alemán": "[Ich] {muss organisieren} (diese Dateien)",
      "italiano": "[Io] {devo organizzare} (questi file)",
      "frances": "[Je] {dois organiser} (ces fichiers)"
    },
    {
      "español": "[El aire acondicionado] {no funciona} (en la oficina)",
      "ingles": "[The air conditioning] {doesn't work} (in the office)",
      "alemán": "[Die Klimaanlage] {funktioniert nicht} (im Büro)",
      "italiano": "[Il condizionatore] {non funziona} (in ufficio)",
      "frances": "[La climatisation] {ne fonctionne pas} (au bureau)"
    },
    {
      "español": "[Yo] {Debo actualizar} (el software)",
      "ingles": "[I] {need to update} (the software)",
      "alemán": "[Ich] {muss aktualisieren} (die Software)",
      "italiano": "[Io] {devo aggiornare} (il software)",
      "frances": "[Je] {dois mettre à jour} (le logiciel)"
    }
],
"ciudad": [
    {
      "español": "[El tráfico] {está terrible} (esta mañana)",
      "ingles": "[The traffic] {is terrible} (this morning)",
      "alemán": "[Der Verkehr] {ist schrecklich} (heute Morgen)",
      "italiano": "[Il traffico] {è terribile} (questa mattina)",
      "frances": "[La circulation] {est terrible} (ce matin)"
    },
    {
      "español": "[Yo] {Necesito tomar} (el metro)",
      "ingles": "[I] {need to take} (the subway)",
      "alemán": "[Ich] {muss nehmen} (die U-Bahn)",
      "italiano": "[Io] {devo prendere} (la metropolitana)",
      "frances": "[Je] {dois prendre} (le métro)"
    },
    {
      "español": "[El parque] {está lleno} (de gente)",
      "ingles": "[The park] {is full} (of people)",
      "alemán": "[Der Park] {ist voll} (mit Menschen)",
      "italiano": "[Il parco] {è pieno} (di gente)",
      "frances": "[Le parc] {est plein} (de gens)"
    },
    {
      "español": "[Los museos] {están cerrados} (los lunes)",
      "ingles": "[The museums] {are closed} (on Mondays)",
      "alemán": "[Die Museen] {sind geschlossen} (montags)",
      "italiano": "[I musei] {sono chiusi} (il lunedì)",
      "frances": "[Les musées] {sont fermés} (le lundi)"
    },
    {
      "español": "[Yo] {Voy a visitar} (el centro histórico)",
      "ingles": "[I] {am going to visit} (the historic center)",
      "alemán": "[Ich] {werde besuchen} (das historische Zentrum)",
      "italiano": "[Io] {visiterò} (il centro storico)",
      "frances": "[Je] {vais visiter} (le centre historique)"
    },
    {
      "español": "[El autobús] {llega tarde} (otra vez)",
      "ingles": "[The bus] {is running late} (again)",
      "alemán": "[Der Bus] {kommt zu spät} (wieder)",
      "italiano": "[L'autobus] {è in ritardo} (di nuovo)",
      "frances": "[Le bus] {est en retard} (encore)"
    },
    {
      "español": "[Las tiendas] {cierran} (a las nueve)",
      "ingles": "[The shops] {close} (at nine)",
      "alemán": "[Die Geschäfte] {schließen} (um neun)",
      "italiano": "[I negozi] {chiudono} (alle nove)",
      "frances": "[Les magasins] {ferment} (à neuf heures)"
    },
    {
      "español": "[La biblioteca] {abre} (temprano)",
      "ingles": "[The library] {opens} (early)",
      "alemán": "[Die Bibliothek] {öffnet} (früh)",
      "italiano": "[La biblioteca] {apre} (presto)",
      "frances": "[La bibliothèque] {ouvre} (tôt)"
    },
    {
      "español": "[Nosotros] {Debemos encontrar} (un estacionamiento)",
      "ingles": "[We] {need to find} (a parking spot)",
      "alemán": "[Wir] {müssen finden} (einen Parkplatz)",
      "italiano": "[Noi] {dobbiamo trovare} (un parcheggio)",
      "frances": "[Nous] {devons trouver} (une place de parking)"
    }
],

"vacaciones": [
    {
      "español": "[Yo] {Voy a reservar} (los billetes de avión)",
      "ingles": "[I] {am going to book} (the plane tickets)",
      "alemán": "[Ich] {werde buchen} (die Flugtickets)",
      "italiano": "[Io] {prenoterò} (i biglietti aerei)",
      "frances": "[Je] {vais réserver} (les billets d'avion)"
    },
    {
      "español": "[El hotel] {tiene} (una piscina hermosa)",
      "ingles": "[The hotel] {has} (a beautiful pool)",
      "alemán": "[Das Hotel] {hat} (einen schönen Pool)",
      "italiano": "[L'hotel] {ha} (una bella piscina)",
      "frances": "[L'hôtel] {a} (une belle piscine)"
    },
    {
      "español": "[Nosotros] {Necesitamos hacer} (las maletas)",
      "ingles": "[We] {need to pack} (the suitcases)",
      "alemán": "[Wir] {müssen packen} (die Koffer)",
      "italiano": "[Noi] {dobbiamo fare} (le valigie)",
      "frances": "[Nous] {devons faire} (les valises)"
    },
    {
      "español": "[El vuelo] {sale} (mañana temprano)",
      "ingles": "[The flight] {leaves} (early tomorrow)",
      "alemán": "[Der Flug] {geht} (morgen früh)",
      "italiano": "[Il volo] {parte} (domani presto)",
      "frances": "[Le vol] {part} (tôt demain)"
    },
    {
      "español": "[Yo] {Quiero visitar} (la playa)",
      "ingles": "[I] {want to visit} (the beach)",
      "alemán": "[Ich] {möchte besuchen} (den Strand)",
      "italiano": "[Io] {voglio visitare} (la spiaggia)",
      "frances": "[Je] {veux visiter} (la plage)"
    },
    {
      "español": "[El tiempo] {estará soleado} (toda la semana)",
      "ingles": "[The weather] {will be sunny} (all week)",
      "alemán": "[Das Wetter] {wird sonnig sein} (die ganze Woche)",
      "italiano": "[Il tempo] {sarà soleggiato} (tutta la settimana)",
      "frances": "[Le temps] {sera ensoleillé} (toute la semaine)"
    },
    {
      "español": "[Nosotros] {Debemos cambiar} (dinero)",
      "ingles": "[We] {need to exchange} (money)",
      "alemán": "[Wir] {müssen wechseln} (Geld)",
      "italiano": "[Noi] {dobbiamo cambiare} (i soldi)",
      "frances": "[Nous] {devons changer} (de l'argent)"
    },
    {
      "español": "[El pasaporte] {está} (en la maleta)",
      "ingles": "[The passport] {is} (in the suitcase)",
      "alemán": "[Der Pass] {ist} (im Koffer)",
      "italiano": "[Il passaporto] {è} (nella valigia)",
      "frances": "[Le passeport] {est} (dans la valise)"
    },
    {
      "español": "[Las excursiones] {están incluidas} (en el paquete)",
      "ingles": "[The excursions] {are included} (in the package)",
      "alemán": "[Die Ausflüge] {sind inbegriffen} (im Paket)",
      "italiano": "[Le escursioni] {sono incluse} (nel pacchetto)",
      "frances": "[Les excursions] {sont incluses} (dans le forfait)"
    }
],

"proyecto": [
    {
      "español": "[Nosotros] {Debemos entregar} (el informe mañana)",
      "ingles": "[We] {must deliver} (the report tomorrow)",
      "alemán": "[Wir] {müssen abgeben} (den Bericht morgen)",
      "italiano": "[Noi] {dobbiamo consegnare} (il rapporto domani)",
      "frances": "[Nous] {devons livrer} (le rapport demain)"
    },
    {
      "español": "[La presentación] {está lista} (para revisión)",
      "ingles": "[The presentation] {is ready} (for review)",
      "alemán": "[Die Präsentation] {ist fertig} (zur Überprüfung)",
      "italiano": "[La presentazione] {è pronta} (per la revisione)",
      "frances": "[La présentation] {est prête} (pour révision)"
    },
    {
      "español": "[El equipo] {trabajará} (este fin de semana)",
      "ingles": "[The team] {will work} (this weekend)",
      "alemán": "[Das Team] {wird arbeiten} (dieses Wochenende)",
      "italiano": "[Il team] {lavorerà} (questo fine settimana)",
      "frances": "[L'équipe] {travaillera} (ce week-end)"
    },
    {
      "español": "[Yo] {Necesito revisar} (los números)",
      "ingles": "[I] {need to review} (the numbers)",
      "alemán": "[Ich] {muss überprüfen} (die Zahlen)",
      "italiano": "[Io] {devo rivedere} (i numeri)",
      "frances": "[Je] {dois revoir} (les chiffres)"
    },
    {
      "español": "[El cliente] {quiere cambios} (en el diseño)",
      "ingles": "[The client] {wants changes} (in the design)",
      "alemán": "[Der Kunde] {möchte Änderungen} (im Design)",
      "italiano": "[Il cliente] {vuole cambiamenti} (nel design)",
      "frances": "[Le client] {veut des changements} (dans le design)"
    },
    {
      "español": "[La reunión] {será} (por videoconferencia)",
      "ingles": "[The meeting] {will be} (by videoconference)",
      "alemán": "[Das Meeting] {wird sein} (per Videokonferenz)",
      "italiano": "[La riunione] {sarà} (in videoconferenza)",
      "frances": "[La réunion] {sera} (par visioconférence)"
    },
    {
      "español": "[El presupuesto] {está ajustado} (este mes)",
      "ingles": "[The budget] {is tight} (this month)",
      "alemán": "[Das Budget] {ist knapp} (diesen Monat)",
      "italiano": "[Il budget] {è limitato} (questo mese)",
      "frances": "[Le budget] {est serré} (ce mois-ci)"
    },
    {
      "español": "[Nosotros] {Necesitamos más tiempo} (para terminar)",
      "ingles": "[We] {need more time} (to finish)",
      "alemán": "[Wir] {brauchen mehr Zeit} (zum Abschluss)",
      "italiano": "[Noi] {abbiamo bisogno di più tempo} (per finire)",
      "frances": "[Nous] {avons besoin de plus de temps} (pour finir)"
    },
    {
      "español": "[Los resultados] {son positivos} (hasta ahora)",
      "ingles": "[The results] {are positive} (so far)",
      "alemán": "[Die Ergebnisse] {sind positiv} (bis jetzt)",
      "italiano": "[I risultati] {sono positivi} (finora)",
      "frances": "[Les résultats] {sont positifs} (jusqu'à présent)"
    }
],

"mercado": [
    {
      "español": "[Yo] {Necesito comprar} (frutas y verduras)",
      "ingles": "[I] {need to buy} (fruits and vegetables)",
      "alemán": "[Ich] {muss kaufen} (Obst und Gemüse)",
      "italiano": "[Io] {devo comprare} (frutta e verdura)",
      "frances": "[Je] {dois acheter} (des fruits et légumes)"
    },
    {
      "español": "[Los precios] {han subido} (esta semana)",
      "ingles": "[The prices] {have gone up} (this week)",
      "alemán": "[Die Preise] {sind gestiegen} (diese Woche)",
      "italiano": "[I prezzi] {sono aumentati} (questa settimana)",
      "frances": "[Les prix] {ont augmenté} (cette semaine)"
    },
    {
      "español": "[El pescado] {está fresco} (hoy)",
      "ingles": "[The fish] {is fresh} (today)",
      "alemán": "[Der Fisch] {ist frisch} (heute)",
      "italiano": "[Il pesce] {è fresco} (oggi)",
      "frances": "[Le poisson] {est frais} (aujourd'hui)"
    },
    {
      "español": "[Yo] {Olvidé traer} (la lista de compras)",
      "ingles": "[I] {forgot to bring} (the shopping list)",
      "alemán": "[Ich] {habe vergessen} (die Einkaufsliste mitzubringen)",
      "italiano": "[Io] {ho dimenticato} (la lista della spesa)",
      "frances": "[J'] {ai oublié} (la liste des courses)"
    },
    {
      "español": "[Las ofertas] {terminan} (mañana)",
      "ingles": "[The offers] {end} (tomorrow)",
      "alemán": "[Die Angebote] {enden} (morgen)",
      "italiano": "[Le offerte] {finiscono} (domani)",
      "frances": "[Les offres] {se terminent} (demain)"
    },
    {
      "español": "[Nosotros] {Necesitamos un carrito} (de compras)",
      "ingles": "[We] {need a shopping} (cart)",
      "alemán": "[Wir] {brauchen einen Einkaufs} (wagen)",
      "italiano": "[Noi] {abbiamo bisogno di un carrello} (della spesa)",
      "frances": "[Nous] {avons besoin d'un chariot} (de courses)"
    },
    {
      "español": "[La caja] {está cerrada} (usa la automática)",
      "ingles": "[The checkout] {is closed} (use the self-checkout)",
      "alemán": "[Die Kasse] {ist geschlossen} (benutze die Selbstbedienungskasse)",
      "italiano": "[La cassa] {è chiusa} (usa quella automatica)",
      "frances": "[La caisse] {est fermée} (utilise la caisse automatique)"
    },
    {
      "español": "[El pan] {está recién horneado} (huele delicioso)",
      "ingles": "[The bread] {is freshly baked} (smells delicious)",
      "alemán": "[Das Brot] {ist frisch gebacken} (riecht köstlich)",
      "italiano": "[Il pane] {è appena sfornato} (profuma deliziosamente)",
      "frances": "[Le pain] {est fraîchement cuit} (sent délicieux)"
    },
    {
      "español": "[Yo] {Busco productos} (orgánicos)",
      "ingles": "[I] {am looking for} (organic products)",
      "alemán": "[Ich] {suche} (Bio-Produkte)",
      "italiano": "[Io] {cerco prodotti} (biologici)",
      "frances": "[Je] {cherche des produits} (biologiques)"
    }
],

"guarderia": [
    {
      "español": "[Los niños] {están jugando} (en el patio)",
      "ingles": "[The children] {are playing} (in the yard)",
      "alemán": "[Die Kinder] {spielen} (im Hof)",
      "italiano": "[I bambini] {stanno giocando} (nel cortile)",
      "frances": "[Les enfants] {jouent} (dans la cour)"
    },
    {
      "español": "[Es hora de] {la siesta} (para los pequeños)",
      "ingles": "[It's time for] {the nap} (for the little ones)",
      "alemán": "[Es ist Zeit für] {den Mittagsschlaf} (für die Kleinen)",
      "italiano": "[È ora della] {nanna} (per i piccoli)",
      "frances": "[C'est l'heure de] {la sieste} (pour les petits)"
    },
    {
      "español": "[La merienda] {será} (a las tres)",
      "ingles": "[The snack] {will be} (at three)",
      "alemán": "[Die Zwischenmahlzeit] {wird sein} (um drei)",
      "italiano": "[La merenda] {sarà} (alle tre)",
      "frances": "[Le goûter] {sera} (à trois heures)"
    },
    {
      "español": "[Nosotros] {Vamos a pintar} (con acuarelas)",
      "ingles": "[We] {are going to paint} (with watercolors)",
      "alemán": "[Wir] {werden malen} (mit Wasserfarben)",
      "italiano": "[Noi] {dipingeremo} (con gli acquarelli)",
      "frances": "[Nous] {allons peindre} (avec des aquarelles)"
    },
    {
      "español": "[El profesor] {leerá} (un cuento)",
      "ingles": "[The teacher] {will read} (a story)",
      "alemán": "[Der Lehrer] {wird vorlesen} (eine Geschichte)",
      "italiano": "[L'insegnante] {leggerà} (una storia)",
      "frances": "[Le professeur] {lira} (une histoire)"
    },
    {
      "español": "[Los padres] {deben recoger} (a los niños antes de las cinco)",
      "ingles": "[Parents] {must pick up} (the children before five)",
      "alemán": "[Die Eltern] {müssen abholen} (die Kinder vor fünf)",
      "italiano": "[I genitori] {devono prendere} (i bambini prima delle cinque)",
      "frances": "[Les parents] {doivent récupérer} (les enfants avant cinq heures)"
    },
    {
      "español": "[El patio] {está mojado} (por la lluvia)",
      "ingles": "[The playground] {is wet} (from the rain)",
      "alemán": "[Der Spielplatz] {ist nass} (vom Regen)",
      "italiano": "[Il cortile] {è bagnato} (per la pioggia)",
      "frances": "[La cour] {est mouillée} (à cause de la pluie)"
    },
    {
      "español": "[Nosotros] {Haremos manualidades} (esta tarde)",
      "ingles": "[We] {will do crafts} (this afternoon)",
      "alemán": "[Wir] {werden basteln} (heute Nachmittag)",
      "italiano": "[Noi] {faremo lavori manuali} (questo pomeriggio)",
      "frances": "[Nous] {ferons du bricolage} (cet après-midi)"
    },
    {
      "español": "[Los juguetes] {deben guardarse} (en su lugar)",
      "ingles": "[The toys] {must be put away} (in their place)",
      "alemán": "[Die Spielzeuge] {müssen aufgeräumt werden} (an ihren Platz)",
      "italiano": "[I giocattoli] {devono essere riposti} (al loro posto)",
      "frances": "[Les jouets] {doivent être rangés} (à leur place)"
    }
],
"colegio": [
    {
      "español": "[Los estudiantes] {tienen examen} (de matemáticas)",
      "ingles": "[The students] {have a test} (in mathematics)",
      "alemán": "[Die Schüler] {haben eine Prüfung} (in Mathematik)",
      "italiano": "[Gli studenti] {hanno un esame} (di matematica)",
      "frances": "[Les élèves] {ont un examen} (de mathématiques)"
    },
    {
      "español": "[La clase] {comienza} (a las ocho)",
      "ingles": "[The class] {starts} (at eight)",
      "alemán": "[Der Unterricht] {beginnt} (um acht)",
      "italiano": "[La lezione] {inizia} (alle otto)",
      "frances": "[La classe] {commence} (à huit heures)"
    },
    {
      "español": "[Yo] {Olvidé traer} (mi tarea)",
      "ingles": "[I] {forgot to bring} (my homework)",
      "alemán": "[Ich] {habe vergessen} (meine Hausaufgaben mitzubringen)",
      "italiano": "[Io] {ho dimenticato} (i miei compiti)",
      "frances": "[J'] {ai oublié d'apporter} (mes devoirs)"
    },
    {
      "español": "[El profesor] {está explicando} (la lección)",
      "ingles": "[The teacher] {is explaining} (the lesson)",
      "alemán": "[Der Lehrer] {erklärt} (die Lektion)",
      "italiano": "[L'insegnante] {sta spiegando} (la lezione)",
      "frances": "[Le professeur] {explique} (la leçon)"
    },
    {
      "español": "[El recreo] {dura} (treinta minutos)",
      "ingles": "[The break] {lasts} (thirty minutes)",
      "alemán": "[Die Pause] {dauert} (dreißig Minuten)",
      "italiano": "[La ricreazione] {dura} (trenta minuti)",
      "frances": "[La récréation] {dure} (trente minutes)"
    },
    {
      "español": "[Nosotros] {Tenemos educación física} (en el gimnasio)",
      "ingles": "[We] {have physical education} (in the gym)",
      "alemán": "[Wir] {haben Sportunterricht} (in der Turnhalle)",
      "italiano": "[Noi] {abbiamo educazione fisica} (in palestra)",
      "frances": "[Nous] {avons éducation physique} (dans le gymnase)"
    },
    {
      "español": "[La biblioteca] {está abierta} (durante el almuerzo)",
      "ingles": "[The library] {is open} (during lunch)",
      "alemán": "[Die Bibliothek] {ist geöffnet} (während der Mittagspause)",
      "italiano": "[La biblioteca] {è aperta} (durante il pranzo)",
      "frances": "[La bibliothèque] {est ouverte} (pendant le déjeuner)"
    },
    {
      "español": "[Los padres] {deben firmar} (las calificaciones)",
      "ingles": "[Parents] {must sign} (the grades)",
      "alemán": "[Die Eltern] {müssen unterschreiben} (die Noten)",
      "italiano": "[I genitori] {devono firmare} (i voti)",
      "frances": "[Les parents] {doivent signer} (les notes)"
    },
    {
      "español": "[La excursión] {será} (el próximo viernes)",
      "ingles": "[The field trip] {will be} (next Friday)",
      "alemán": "[Der Ausflug] {wird sein} (nächsten Freitag)",
      "italiano": "[La gita] {sarà} (venerdì prossimo)",
      "frances": "[La sortie scolaire] {sera} (vendredi prochain)"
    }
],
"pago_y_cobro": [
    {
      "español": "[Yo] {Necesito pagar} (la factura de luz)",
      "ingles": "[I] {need to pay} (the electricity bill)",
      "alemán": "[Ich] {muss bezahlen} (die Stromrechnung)",
      "italiano": "[Io] {devo pagare} (la bolletta della luce)",
      "frances": "[Je] {dois payer} (la facture d'électricité)"
    },
    {
      "español": "[El pago] {se realizará} (por transferencia bancaria)",
      "ingles": "[The payment] {will be made} (by bank transfer)",
      "alemán": "[Die Zahlung] {wird erfolgen} (per Banküberweisung)",
      "italiano": "[Il pagamento] {sarà effettuato} (tramite bonifico bancario)",
      "frances": "[Le paiement] {sera effectué} (par virement bancaire)"
    },
    {
      "español": "[La tarjeta] {fue rechazada} (por el sistema)",
      "ingles": "[The card] {was declined} (by the system)",
      "alemán": "[Die Karte] {wurde abgelehnt} (vom System)",
      "italiano": "[La carta] {è stata rifiutata} (dal sistema)",
      "frances": "[La carte] {a été refusée} (par le système)"
    },
    {
      "español": "[Yo] {Debo cobrar} (el cheque antes del viernes)",
      "ingles": "[I] {need to cash} (the check before Friday)",
      "alemán": "[Ich] {muss einlösen} (den Scheck vor Freitag)",
      "italiano": "[Io] {devo incassare} (l'assegno prima di venerdì)",
      "frances": "[Je] {dois encaisser} (le chèque avant vendredi)"
    },
    {
      "español": "[El salario] {se deposita} (el día 30)",
      "ingles": "[The salary] {is deposited} (on the 30th)",
      "alemán": "[Das Gehalt] {wird überwiesen} (am 30.)",
      "italiano": "[Lo stipendio] {viene depositato} (il 30)",
      "frances": "[Le salaire] {est versé} (le 30)"
    },
    {
      "español": "[La cuota] {está vencida} (desde ayer)",
      "ingles": "[The payment] {is overdue} (since yesterday)",
      "alemán": "[Die Rate] {ist überfällig} (seit gestern)",
      "italiano": "[La rata] {è scaduta} (da ieri)",
      "frances": "[L'échéance] {est dépassée} (depuis hier)"
    },
    {
      "español": "[Nosotros] {Aceptamos} (todas las tarjetas de crédito)",
      "ingles": "[We] {accept} (all credit cards)",
      "alemán": "[Wir] {akzeptieren} (alle Kreditkarten)",
      "italiano": "[Noi] {accettiamo} (tutte le carte di credito)",
      "frances": "[Nous] {acceptons} (toutes les cartes de crédit)"
    },
    {
      "español": "[El recibo] {debe guardarse} (para la garantía)",
      "ingles": "[The receipt] {must be kept} (for the warranty)",
      "alemán": "[Die Quittung] {muss aufbewahrt werden} (für die Garantie)",
      "italiano": "[Lo scontrino] {deve essere conservato} (per la garanzia)",
      "frances": "[Le reçu] {doit être gardé} (pour la garantie)"
    },
    {
      "español": "[La comisión] {será del} (tres por ciento)",
      "ingles": "[The commission] {will be} (three percent)",
      "alemán": "[Die Provision] {wird betragen} (drei Prozent)",
      "italiano": "[La commissione] {sarà del} (tre percento)",
      "frances": "[La commission] {sera de} (trois pour cent)"
    }
],

"entrevistas_laborales": [
    {
      "español": "[La entrevista] {será} (a las diez de la mañana)",
      "ingles": "[The interview] {will be} (at ten in the morning)",
      "alemán": "[Das Vorstellungsgespräch] {wird sein} (um zehn Uhr morgens)",
      "italiano": "[Il colloquio] {sarà} (alle dieci del mattino)",
      "frances": "[L'entretien] {sera} (à dix heures du matin)"
    },
    {
      "español": "[Yo] {Debo llevar} (mi currículum actualizado)",
      "ingles": "[I] {must bring} (my updated resume)",
      "alemán": "[Ich] {muss mitbringen} (meinen aktualisierten Lebenslauf)",
      "italiano": "[Io] {devo portare} (il mio curriculum aggiornato)",
      "frances": "[Je] {dois apporter} (mon CV mis à jour)"
    },
    {
      "español": "[El entrevistador] {preguntará sobre} (mi experiencia laboral)",
      "ingles": "[The interviewer] {will ask about} (my work experience)",
      "alemán": "[Der Interviewer] {wird fragen nach} (meiner Berufserfahrung)",
      "italiano": "[L'intervistatore] {chiederà della} (mia esperienza lavorativa)",
      "frances": "[L'interviewer] {demandera} (mon expérience professionnelle)"
    },
    {
      "español": "[Yo] {Debo vestir} (de manera formal)",
      "ingles": "[I] {must dress} (formally)",
      "alemán": "[Ich] {muss mich kleiden} (formell)",
      "italiano": "[Io] {devo vestirmi} (in modo formale)",
      "frances": "[Je] {dois m'habiller} (de façon formelle)"
    },
    {
      "español": "[La empresa] {ofrece} (un buen paquete de beneficios)",
      "ingles": "[The company] {offers} (a good benefits package)",
      "alemán": "[Das Unternehmen] {bietet} (ein gutes Leistungspaket)",
      "italiano": "[L'azienda] {offre} (un buon pacchetto di benefici)",
      "frances": "[L'entreprise] {offre} (un bon package d'avantages)"
    },
    {
      "español": "[Ellos] {Quieren saber} (mis pretensiones salariales)",
      "ingles": "[They] {want to know} (my salary expectations)",
      "alemán": "[Sie] {wollen wissen} (meine Gehaltsvorstellungen)",
      "italiano": "[Loro] {vogliono sapere} (le mie aspettative salariali)",
      "frances": "[Ils] {veulent connaître} (mes prétentions salariales)"
    },
    {
      "español": "[La posición] {requiere} (disponibilidad inmediata)",
      "ingles": "[The position] {requires} (immediate availability)",
      "alemán": "[Die Position] {erfordert} (sofortige Verfügbarkeit)",
      "italiano": "[La posizione] {richiede} (disponibilità immediata)",
      "frances": "[Le poste] {requiert} (une disponibilité immédiate)"
    },
    {
      "español": "[Yo] {Tengo preparadas} (todas las referencias)",
      "ingles": "[I] {have prepared} (all the references)",
      "alemán": "[Ich] {habe vorbereitet} (alle Referenzen)",
      "italiano": "[Io] {ho preparato} (tutte le referenze)",
      "frances": "[J'] {ai préparé} (toutes les références)"
    },
    {
      "español": "[La segunda entrevista] {será} (con el director general)",
      "ingles": "[The second interview] {will be} (with the general manager)",
      "alemán": "[Das zweite Gespräch] {wird sein} (mit dem Geschäftsführer)",
      "italiano": "[Il secondo colloquio] {sarà} (con il direttore generale)",
      "frances": "[Le deuxième entretien] {sera} (avec le directeur général)"
    }
]
};


const palabras = {
  "cocina": [
    {
      "verbos": {
        "español": ["cortar", "rallar", "hacer", "preparar", "botar", "meter"],
        "ingles": ["to chop", "to grate", "to make", "to prepare", "to throw out", "to put"],
        "alemán": ["schneiden", "reiben", "machen", "zubereiten", "rausbringen", "stellen"],
        "italiano": ["tagliare", "grattugiare", "fare", "preparare", "buttare", "mettere"],
        "frances": ["couper", "râper", "faire", "préparer", "jeter", "mettre"]
      },
      "sustantivos": {
        "español": ["verduras", "queso", "sopa", "pollo", "lentejas", "café", "té", "nevera", "basura", "tarta"],
        "ingles": ["vegetables", "cheese", "soup", "chicken", "lentils", "coffee", "tea", "fridge", "trash", "cake"],
        "alemán": ["das Gemüse", "der Käse", "die Suppe", "das Huhn", "die Linsen", "der Kaffee", "der Tee", "der Kühlschrank", "der Müll", "der Kuchen"],
        "italiano": ["verdure", "formaggio", "zuppa", "pollo", "lenticchie", "caffè", "tè", "frigorifero", "spazzatura", "torta"],
        "frances": ["légumes", "fromage", "soupe", "poulet", "lentilles", "café", "thé", "réfrigérateur", "ordures", "gâteau"]
      }
    }
  ],
  "comedor": [
    {
      "verbos": {
        "español": ["traer", "gustar", "querer", "pasar", "limpiar", "agradecer"],
        "ingles": ["to bring", "to like", "to want", "to pass", "to clean", "to thank"],
        "alemán": ["bringen", "mögen", "wollen", "geben", "abwischen", "danken"],
        "italiano": ["portare", "piacere", "volere", "passare", "pulire", "ringraziare"],
        "frances": ["apporter", "aimer", "vouloir", "passer", "nettoyer", "remercier"]
      },
      "sustantivos": {
        "español": ["cubiertos", "servilletas", "comida", "vaso", "agua", "postre", "cuchillo", "mesa"],
        "ingles": ["cutlery", "napkins", "food", "glass", "water", "dessert", "knife", "table"],
        "alemán": ["das Besteck", "die Servietten", "das Essen", "das Glas", "das Wasser", "der Nachtisch", "das Messer", "der Tisch"],
        "italiano": ["posate", "tovaglioli", "cibo", "bicchiere", "acqua", "dolce", "coltello", "tavolo"],
        "frances": ["couverts", "serviettes", "nourriture", "verre", "eau", "dessert", "couteau", "table"]
      }
    }
  ],
  "dormitorio": [
    {
      "verbos": {
        "español": ["tender", "cambiar", "abrir", "ordenar", "funcionar", "poner", "ajustar"],
        "ingles": ["to make", "to change", "to open", "to organize", "to work", "to set", "to adjust"],
        "alemán": ["machen", "wechseln", "öffnen", "aufräumen", "funktionieren", "stellen", "anpassen"],
        "italiano": ["fare", "cambiare", "aprire", "ordinare", "funzionare", "mettere", "regolare"],
        "frances": ["faire", "changer", "ouvrir", "ranger", "marcher", "mettre", "ajuster"]
      },
      "sustantivos": {
        "español": ["cama", "sábanas", "ventana", "armario", "lámpara", "alarma", "aire acondicionado"],
        "ingles": ["bed", "sheets", "window", "closet", "lamp", "alarm", "air conditioning"],
        "alemán": ["das Bett", "die Bettwäsche", "das Fenster", "der Schrank", "die Lampe", "der Wecker", "die Klimaanlage"],
        "italiano": ["letto", "lenzuola", "finestra", "armadio", "lampada", "sveglia", "condizionatore"],
        "frances": ["lit", "draps", "fenêtre", "armoire", "lampe", "alarme", "climatisation"]
      }
    }
  ],
"baño": [
    {
      "verbos": {
        "español": ["limpiar", "duchar", "cambiar", "gotear", "lavar", "esperar"],
        "ingles": ["to clean", "to shower", "to change", "to drip", "to wash", "to wait"],
        "alemán": ["putzen", "duschen", "wechseln", "tropfen", "waschen", "warten"],
        "italiano": ["pulire", "fare la doccia", "cambiare", "gocciolare", "lavare", "aspettare"],
        "frances": ["nettoyer", "prendre une douche", "changer", "goutter", "laver", "attendre"]
      },
      "sustantivos": {
        "español": ["espejo", "ducha", "papel higiénico", "agua", "cortina", "lavamanos", "toallas", "plomero"],
        "ingles": ["mirror", "shower", "toilet paper", "water", "curtain", "sink", "towels", "plumber"],
        "alemán": ["der Spiegel", "die Dusche", "das Toilettenpapier", "das Wasser", "der Vorhang", "das Waschbecken", "die Handtücher", "der Klempner"],
        "italiano": ["specchio", "doccia", "carta igienica", "acqua", "tenda", "lavandino", "asciugamani", "idraulico"],
        "frances": ["miroir", "douche", "papier toilette", "eau", "rideau", "lavabo", "serviettes", "plombier"]
      }
    }
],

"sala": [
    {
      "verbos": {
        "español": ["ver", "bajar", "aspirar", "llegar", "limpiar", "necesitar"],
        "ingles": ["to watch", "to lower", "to vacuum", "to arrive", "to clean", "to need"],
        "alemán": ["schauen", "senken", "staubsaugen", "ankommen", "reinigen", "brauchen"],
        "italiano": ["guardare", "abbassare", "aspirare", "arrivare", "pulire", "avere bisogno"],
        "frances": ["regarder", "baisser", "aspirer", "arriver", "nettoyer", "avoir besoin"]
      },
      "sustantivos": {
        "español": ["película", "control remoto", "volumen", "cortinas", "alfombra", "invitados", "sofá"],
        "ingles": ["movie", "remote control", "volume", "curtains", "carpet", "guests", "sofa"],
        "alemán": ["der Film", "die Fernbedienung", "die Lautstärke", "die Vorhänge", "der Teppich", "die Gäste", "das Sofa"],
        "italiano": ["film", "telecomando", "volume", "tende", "tappeto", "ospiti", "divano"],
        "frances": ["film", "télécommande", "volume", "rideaux", "tapis", "invités", "canapé"]
      }
    }
],

"oficina": [
    {
      "verbos": {
        "español": ["imprimir", "organizar", "actualizar", "funcionar", "tener", "reunir"],
        "ingles": ["to print", "to organize", "to update", "to work", "to have", "to meet"],
        "alemán": ["drucken", "organisieren", "aktualisieren", "funktionieren", "haben", "treffen"],
        "italiano": ["stampare", "organizzare", "aggiornare", "funzionare", "avere", "riunire"],
        "frances": ["imprimer", "organiser", "mettre à jour", "fonctionner", "avoir", "réunir"]
      },
      "sustantivos": {
        "español": ["documentos", "computadora", "reunión", "impresora", "archivos", "aire acondicionado", "software"],
        "ingles": ["documents", "computer", "meeting", "printer", "files", "air conditioning", "software"],
        "alemán": ["die Dokumente", "der Computer", "das Meeting", "der Drucker", "die Dateien", "die Klimaanlage", "die Software"],
        "italiano": ["documenti", "computer", "riunione", "stampante", "file", "condizionatore", "software"],
        "frances": ["documents", "ordinateur", "réunion", "imprimante", "fichiers", "climatisation", "logiciel"]
      }
    }
],

"ciudad": [
    {
      "verbos": {
        "español": ["visitar", "tomar", "cerrar", "abrir", "encontrar", "llegar"],
        "ingles": ["to visit", "to take", "to close", "to open", "to find", "to arrive"],
        "alemán": ["besuchen", "nehmen", "schließen", "öffnen", "finden", "ankommen"],
        "italiano": ["visitare", "prendere", "chiudere", "aprire", "trovare", "arrivare"],
        "frances": ["visiter", "prendre", "fermer", "ouvrir", "trouver", "arriver"]
      },
      "sustantivos": {
        "español": ["tráfico", "metro", "parque", "museos", "centro histórico", "autobús", "tiendas", "biblioteca", "estacionamiento"],
        "ingles": ["traffic", "subway", "park", "museums", "historic center", "bus", "shops", "library", "parking"],
        "alemán": ["der Verkehr", "die U-Bahn", "der Park", "die Museen", "das historische Zentrum", "der Bus", "die Geschäfte", "die Bibliothek", "der Parkplatz"],
        "italiano": ["traffico", "metropolitana", "parco", "musei", "centro storico", "autobus", "negozi", "biblioteca", "parcheggio"],
        "frances": ["circulation", "métro", "parc", "musées", "centre historique", "bus", "magasins", "bibliothèque", "parking"]
      }
    }
],

"vacaciones": [
    {
      "verbos": {
        "español": ["reservar", "hacer", "salir", "visitar", "cambiar", "incluir"],
        "ingles": ["to book", "to pack", "to leave", "to visit", "to exchange", "to include"],
        "alemán": ["buchen", "packen", "gehen", "besuchen", "wechseln", "inbegriffen"],
        "italiano": ["prenotare", "fare", "partire", "visitare", "cambiare", "includere"],
        "frances": ["réserver", "faire", "partir", "visiter", "changer", "inclure"]
      },
      "sustantivos": {
        "español": ["billetes", "hotel", "maletas", "vuelo", "playa", "tiempo", "dinero", "pasaporte", "excursiones"],
        "ingles": ["tickets", "hotel", "suitcases", "flight", "beach", "weather", "money", "passport", "excursions"],
        "alemán": ["die Flugtickets", "das Hotel", "die Koffer", "der Flug", "der Strand", "das Wetter", "das Geld", "der Pass", "die Ausflüge"],
        "italiano": ["biglietti", "hotel", "valigie", "volo", "spiaggia", "tempo", "soldi", "passaporto", "escursioni"],
        "frances": ["billets", "hôtel", "valises", "vol", "plage", "temps", "argent", "passeport", "excursions"]
      }
    }
],

"proyecto": [
    {
      "verbos": {
        "español": ["entregar", "revisar", "trabajar", "querer", "necesitar", "terminar"],
        "ingles": ["to deliver", "to review", "to work", "to want", "to need", "to finish"],
        "alemán": ["abgeben", "überprüfen", "arbeiten", "wollen", "brauchen", "abschließen"],
        "italiano": ["consegnare", "rivedere", "lavorare", "volere", "avere bisogno", "finire"],
        "frances": ["livrer", "revoir", "travailler", "vouloir", "avoir besoin", "finir"]
      },
      "sustantivos": {
        "español": ["informe", "presentación", "equipo", "números", "cliente", "diseño", "reunión", "presupuesto", "resultados"],
        "ingles": ["report", "presentation", "team", "numbers", "client", "design", "meeting", "budget", "results"],
        "alemán": ["der Bericht", "die Präsentation", "das Team", "die Zahlen", "der Kunde", "das Design", "das Meeting", "das Budget", "die Ergebnisse"],
        "italiano": ["rapporto", "presentazione", "team", "numeri", "cliente", "design", "riunione", "budget", "risultati"],
        "frances": ["rapport", "présentation", "équipe", "chiffres", "client", "design", "réunion", "budget", "résultats"]
      }
    }
],

"mercado": [
    {
      "verbos": {
        "español": ["comprar", "subir", "olvidar", "terminar", "necesitar", "buscar"],
        "ingles": ["to buy", "to go up", "to forget", "to end", "to need", "to look for"],
        "alemán": ["kaufen", "steigen", "vergessen", "enden", "brauchen", "suchen"],
        "italiano": ["comprare", "aumentare", "dimenticare", "finire", "avere bisogno", "cercare"],
        "frances": ["acheter", "augmenter", "oublier", "terminer", "avoir besoin", "chercher"]
      },
      "sustantivos": {
        "español": ["frutas", "verduras", "precios", "pescado", "lista", "ofertas", "carrito", "caja", "pan", "productos"],
        "ingles": ["fruits", "vegetables", "prices", "fish", "list", "offers", "cart", "checkout", "bread", "products"],
        "alemán": ["das Obst", "das Gemüse", "die Preise", "der Fisch", "die Liste", "die Angebote", "der Einkaufswagen", "die Kasse", "das Brot", "die Produkte"],
        "italiano": ["frutta", "verdura", "prezzi", "pesce", "lista", "offerte", "carrello", "cassa", "pane", "prodotti"],
        "frances": ["fruits", "légumes", "prix", "poisson", "liste", "offres", "chariot", "caisse", "pain", "produits"]
      }
    }
],

"guarderia": [
    {
      "verbos": {
        "español": ["jugar", "dormir", "pintar", "leer", "recoger", "guardar"],
        "ingles": ["to play", "to sleep", "to paint", "to read", "to pick up", "to put away"],
        "alemán": ["spielen", "schlafen", "malen", "vorlesen", "abholen", "aufräumen"],
        "italiano": ["giocare", "dormire", "dipingere", "leggere", "prendere", "riporre"],
        "frances": ["jouer", "dormir", "peindre", "lire", "récupérer", "ranger"]
      },
      "sustantivos": {
        "español": ["niños", "siesta", "merienda", "acuarelas", "cuento", "padres", "patio", "manualidades", "juguetes"],
        "ingles": ["children", "nap", "snack", "watercolors", "story", "parents", "playground", "crafts", "toys"],
        "alemán": ["die Kinder", "der Mittagsschlaf", "die Zwischenmahlzeit", "die Wasserfarben", "die Geschichte", "die Eltern", "der Spielplatz", "das Basteln", "die Spielzeuge"],
        "italiano": ["bambini", "nanna", "merenda", "acquarelli", "storia", "genitori", "cortile", "lavori manuali", "giocattoli"],
        "frances": ["enfants", "sieste", "goûter", "aquarelles", "histoire", "parents", "cour", "bricolage", "jouets"]
      }
    }
],

"colegio": [
    {
      "verbos": {
        "español": ["estudiar", "comenzar", "olvidar", "explicar", "durar", "tener", "firmar", "aprender", "enseñar"],
        "ingles": ["to study", "to start", "to forget", "to explain", "to last", "to have", "to sign", "to learn", "to teach"],
        "alemán": ["studieren", "beginnen", "vergessen", "erklären", "dauern", "haben", "unterschreiben", "lernen", "lehren"],
        "italiano": ["studiare", "iniziare", "dimenticare", "spiegare", "durare", "avere", "firmare", "imparare", "insegnare"],
        "frances": ["étudier", "commencer", "oublier", "expliquer", "durer", "avoir", "signer", "apprendre", "enseigner"]
      },
      "sustantivos": {
        "español": ["estudiantes", "clase", "tarea", "profesor", "recreo", "gimnasio", "biblioteca", "calificaciones", "excursión"],
        "ingles": ["students", "class", "homework", "teacher", "break", "gym", "library", "grades", "field trip"],
        "alemán": ["die Schüler", "der Unterricht", "die Hausaufgaben", "der Lehrer", "die Pause", "die Turnhalle", "die Bibliothek", "die Noten", "der Ausflug"],
        "italiano": ["studenti", "lezione", "compiti", "insegnante", "ricreazione", "palestra", "biblioteca", "voti", "gita"],
        "frances": ["élèves", "classe", "devoirs", "professeur", "récréation", "gymnase", "bibliothèque", "notes", "sortie scolaire"]
      }
    }
],

"pago_y_cobro": [
    {
      "verbos": {
        "español": ["pagar", "realizar", "rechazar", "cobrar", "depositar", "vencer", "aceptar", "guardar", "transferir"],
        "ingles": ["to pay", "to make", "to decline", "to cash", "to deposit", "to expire", "to accept", "to keep", "to transfer"],
        "alemán": ["bezahlen", "durchführen", "ablehnen", "einlösen", "einzahlen", "verfallen", "akzeptieren", "aufbewahren", "überweisen"],
        "italiano": ["pagare", "effettuare", "rifiutare", "incassare", "depositare", "scadere", "accettare", "conservare", "trasferire"],
        "frances": ["payer", "effectuer", "refuser", "encaisser", "déposer", "expirer", "accepter", "garder", "transférer"]
      },
      "sustantivos": {
        "español": ["factura", "transferencia", "tarjeta", "cheque", "salario", "cuota", "recibo", "comisión", "sistema"],
        "ingles": ["bill", "transfer", "card", "check", "salary", "payment", "receipt", "commission", "system"],
        "alemán": ["die Rechnung", "die Überweisung", "die Karte", "der Scheck", "das Gehalt", "die Rate", "die Quittung", "die Provision", "das System"],
        "italiano": ["bolletta", "bonifico", "carta", "assegno", "stipendio", "rata", "scontrino", "commissione", "sistema"],
        "frances": ["facture", "virement", "carte", "chèque", "salaire", "échéance", "reçu", "commission", "système"]
      }
    }
],

"entrevistas_laborales": [
    {
      "verbos": {
        "español": ["entrevistar", "llevar", "preguntar", "vestir", "ofrecer", "querer", "requerir", "preparar", "contratar"],
        "ingles": ["to interview", "to bring", "to ask", "to dress", "to offer", "to want", "to require", "to prepare", "to hire"],
        "alemán": ["interviewen", "mitbringen", "fragen", "kleiden", "anbieten", "wollen", "erfordern", "vorbereiten", "einstellen"],
        "italiano": ["intervistare", "portare", "chiedere", "vestire", "offrire", "volere", "richiedere", "preparare", "assumere"],
        "frances": ["interviewer", "apporter", "demander", "habiller", "offrir", "vouloir", "requérir", "préparer", "embaucher"]
      },
      "sustantivos": {
        "español": ["entrevista", "currículum", "experiencia", "empresa", "beneficios", "salario", "posición", "referencias", "director"],
        "ingles": ["interview", "resume", "experience", "company", "benefits", "salary", "position", "references", "manager"],
        "alemán": ["das Vorstellungsgespräch", "der Lebenslauf", "die Erfahrung", "das Unternehmen", "die Leistungen", "das Gehalt", "die Position", "die Referenzen", "der Geschäftsführer"],
        "italiano": ["colloquio", "curriculum", "esperienza", "azienda", "benefici", "stipendio", "posizione", "referenze", "direttore"],
        "frances": ["entretien", "CV", "expérience", "entreprise", "avantages", "salaire", "poste", "références", "directeur"]
      }
    }
]
};


function mostrarInstrucciones() {
  const habitacionDiv = document.getElementById('habitacion');
  habitacionDiv.innerHTML = ''; // Limpiar contenido anterior

  instrucciones["reinforcement"].forEach((instruccion, index) => {
    const instruccionDiv = document.createElement('div');
    instruccionDiv.classList.add('frase');
    instruccionDiv.innerHTML = `
      <p class="español">${index + 1}. Español: ${instruccion.español}</p>
      <p class="ingles">${index + 1}. Inglés: ${instruccion.ingles}</p>
      <p class="alemán">${index + 1}. Alemán: ${instruccion.alemán}</p>
      <p class="italiano">${index + 1}. Italiano: ${instruccion.italiano}</p>
      <p class="frances">${index + 1}. Francés: ${instruccion.frances}</p>
    `;
    habitacionDiv.appendChild(instruccionDiv);
  });

  actualizarTablaDiccionario();
}






// Modificar la función cambiarHabitacion para incluir la actualización de la tabla
function cambiarHabitacion(habitacion) {
  currentHabitacion = habitacion; // Actualiza la habitación actual
  const habitacionDiv = document.getElementById('habitacion');
  habitacionDiv.innerHTML = ''; // Limpiar contenido anterior

  // Crear elementos para las frases (método Vida Común)
  frases[habitacion].forEach(frase => {
    const fraseDiv = document.createElement('div');
    fraseDiv.classList.add('frase');
    fraseDiv.innerHTML = `
      <p class="español">Español: ${frase.español}</p>
      <p class="ingles">Inglés: ${frase.ingles}</p>
      <p class="alemán">Alemán: ${frase.alemán}</p>
      <p class="italiano">Italiano: ${frase.italiano}</p>
      <p class="frances">Francés: ${frase.frances}</p>
    `;
    habitacionDiv.appendChild(fraseDiv);
  });

  // Actualizar la tabla de diccionario usando currentHabitacion
  actualizarTablaDiccionario();

  // Efecto de cambio de página
  habitacionDiv.style.transform = `rotateY(${habitacion === 'cocina' ? '0deg' : '360deg'})`;
}

/*

// Función para actualizar la tabla del diccionario
function actualizarTablaDiccionario(habitacion) {
  const tablaDiccionario = document.getElementById('tablaDiccionario');
  const datos = palabras[habitacion][0];
  
  // Obtener idiomas visibles
  const idiomasVisibles = [];
  document.querySelectorAll('header input[type="checkbox"]').forEach(checkbox => {
    if (checkbox.checked) {
      idiomasVisibles.push(checkbox.id);
    }
  });

  // Crear tabla HTML
  let tablaHTML = `
    <thead>
      <tr>
        ${idiomasVisibles.map(idioma => 
          `<th>${idioma.charAt(0).toUpperCase() + idioma.slice(1)}</th>`
        ).join('')}
      </tr>
    </thead>
    <tbody>
      <tr class="seccion-titulo">
        <td colspan="${idiomasVisibles.length}">Verbos</td>
      </tr>
  `;

  // Agregar verbos
  const maxVerbos = Math.max(...idiomasVisibles.map(idioma => 
    datos.verbos[idioma].length
  ));

  for(let i = 0; i < maxVerbos; i++) {
    tablaHTML += '<tr>';
    idiomasVisibles.forEach(idioma => {
      tablaHTML += `<td>${datos.verbos[idioma][i] || ''}</td>`;
    });
    tablaHTML += '</tr>';
  }

  // Agregar sección de sustantivos
  tablaHTML += `
    <tr class="seccion-titulo">
      <td colspan="${idiomasVisibles.length}">Sustantivos</td>
    </tr>
  `;

  // Agregar sustantivos
  const maxSustantivos = Math.max(...idiomasVisibles.map(idioma => 
    datos.sustantivos[idioma].length
  ));

  for(let i = 0; i < maxSustantivos; i++) {
    tablaHTML += '<tr>';
    idiomasVisibles.forEach(idioma => {
      tablaHTML += `<td>${datos.sustantivos[idioma][i] || ''}</td>`;
    });
    tablaHTML += '</tr>';
  }

  tablaHTML += '</tbody>';
  tablaDiccionario.innerHTML = tablaHTML;
}

*/

function actualizarTablaDiccionario() {
  const tablaDiccionario = document.getElementById('tablaDiccionario');
  let datos;
  if (currentMethod === "common") {
    datos = palabras[currentHabitacion][0];
  } else if (currentMethod === "reinforcement") {
    datos = palabrasInstrucciones["reinforcement"];
  }

  // Obtener idiomas visibles
  const idiomasVisibles = [];
  document.querySelectorAll('header input[type="checkbox"]').forEach(checkbox => {
    if (checkbox.checked) {
      idiomasVisibles.push(checkbox.id);
    }
  });

  let tablaHTML = `
    <thead>
      <tr>
        ${idiomasVisibles.map(idioma =>
          `<th>${idioma.charAt(0).toUpperCase() + idioma.slice(1)}</th>`
        ).join('')}
      </tr>
    </thead>
    <tbody>
      <tr class="seccion-titulo">
        <td colspan="${idiomasVisibles.length}">Verbos</td>
      </tr>
  `;

  const maxVerbos = Math.max(...idiomasVisibles.map(idioma =>
    datos.verbos[idioma].length
  ));

  for (let i = 0; i < maxVerbos; i++) {
    tablaHTML += '<tr>';
    idiomasVisibles.forEach(idioma => {
      tablaHTML += `<td>${datos.verbos[idioma][i] || ''}</td>`;
    });
    tablaHTML += '</tr>';
  }

  tablaHTML += `
    <tr class="seccion-titulo">
      <td colspan="${idiomasVisibles.length}">Sustantivos</td>
    </tr>
  `;

  const maxSustantivos = Math.max(...idiomasVisibles.map(idioma =>
    datos.sustantivos[idioma].length
  ));

  for (let i = 0; i < maxSustantivos; i++) {
    tablaHTML += '<tr>';
    idiomasVisibles.forEach(idioma => {
      tablaHTML += `<td>${datos.sustantivos[idioma][i] || ''}</td>`;
    });
    tablaHTML += '</tr>';
  }

  tablaHTML += '</tbody>';
  tablaDiccionario.innerHTML = tablaHTML;
}

function cambiarMetodo() {
  currentMethod = document.getElementById('metodo').value;
  if (currentMethod === "common") {
    document.getElementById('navegacion').style.display = "block";
    cambiarHabitacion(currentHabitacion);
  } else if (currentMethod === "reinforcement") {
    document.getElementById('navegacion').style.display = "none";
    mostrarInstrucciones();
  }
}


// Asignar el listener para el select de método
document.getElementById('metodo').addEventListener('change', cambiarMetodo);



// Mostrar la cocina al cargar la página
cambiarHabitacion('cocina');

// Función para imprimir (requiere una librería externa como jsPDF)
function imprimirHabitacion() {
  const { jsPDF } = window.jspdf; // Importa jsPDF

  const doc = new jsPDF();
  const habitacion = document.getElementById('habitacion');
  const frases = habitacion.querySelectorAll('.frase');

  let y = 10; // Posición inicial en el eje Y

  frases.forEach(frase => {
    const idiomaChecks = document.querySelectorAll('header input[type="checkbox"]');
    idiomaChecks.forEach(checkbox => {
      const idioma = checkbox.id;
      const fraseP = frase.querySelector(`p.${idioma}`);

      if (checkbox.checked && fraseP.style.display !== 'none') {
		  
		 // Obtener el tipo de letra del elemento HTML
      const fontFamily = window.getComputedStyle(fraseP).fontFamily;

      // Aplicar el tipo de letra al texto en el PDF
      doc.setFont(fontFamily); 
        // Obtener el tamaño de letra del elemento HTML
        const fontSize = window.getComputedStyle(fraseP).fontSize; 
        // Obtener el color del elemento HTML
        const color = window.getComputedStyle(fraseP).color; 

        const text = `${idioma.toUpperCase()}: ${fraseP.textContent}`;

        // Aplicar el tamaño de letra al texto en el PDF
        doc.setFontSize(parseFloat(fontSize)); 
        // Aplicar el color al texto en el PDF
        doc.setTextColor(color); 
        doc.text(text, 10, y);
        y += 05; // Incrementa la posición Y para la siguiente línea
      }
    });

    y += 05; // Espacio adicional entre frases
    if (y >= 275) { // Si se llega al final de la página
      doc.addPage(); // Agrega una nueva página
      y = 10; // Reinicia la posición Y
    }
  });

  doc.save('frases_habitacion.pdf');
}

// Función para mostrar/ocultar frases según los idiomas seleccionados
// Modificar la función actualizarVisibilidadFrases para incluir la actualización de la tabla
function actualizarVisibilidadFrases() {
  const checkboxes = document.querySelectorAll('header input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    const idioma = checkbox.id;
    const frases = document.querySelectorAll(`.frase p.${idioma}`);
    frases.forEach(frase => {
      frase.style.display = checkbox.checked ? 'block' : 'none';
    });
  });
  
  // Obtener la habitación actual
  const habitacionActual = document.querySelector('#navegacion button.activo')?.dataset.categoria || 'cocina';
  actualizarTablaDiccionario(habitacionActual);
}  
  

// Función para cambiar el tipo de letra
function cambiarTipoLetra() {
  const fontFamily = document.getElementById('fontfamily').value;
  const frases = document.querySelectorAll('.frase p');
  frases.forEach(frase => {
    frase.style.fontFamily = fontFamily;
  });
}

// Llamar a la función al cargar la página y cada vez que cambia el valor del select
cambiarTipoLetra();
document.getElementById('fontfamily').addEventListener('change', cambiarTipoLetra);


// Función para cambiar el tamaño de letra
function cambiarTamanoLetra() {
  const fontsize = document.getElementById('fontsize').value;
  const frases = document.querySelectorAll('.frase p');
  frases.forEach(frase => {
    frase.style.fontSize = `${fontsize}px`;
  });
}

// Llamar a la función al cargar la página y cada vez que cambia el valor del slider
cambiarTamanoLetra();
document.getElementById('fontsize').addEventListener('input', cambiarTamanoLetra);


// Llamar a la función al cargar la página y cada vez que cambia un checkbox
actualizarVisibilidadFrases();
document.querySelectorAll('header input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', actualizarVisibilidadFrases);
});