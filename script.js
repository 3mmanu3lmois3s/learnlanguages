const frases = {
  "cocina": [
    {
      "español": "[Yo] {Voy a cortar} (las verduras)",
      "ingles": "[I] {am going to chop} (the vegetables)",
      "aleman": "[Ich] {werde schneiden} (das Gemüse)",
      "italiano": "[Io] {taglierò} (le verdure)",
      "frances": "[Je] {vais couper} (les légumes)"
    },
    {
      "español": "[Yo] {Debo rallar} (el queso)",
      "ingles": "[I] {have to grate} (the cheese)",
      "aleman": "[Ich] {muss reiben} (den Käse)",
      "italiano": "[Io] {devo grattugiare} (il formaggio)",
      "frances": "[Je] {dois râper} (le fromage)"
    },
    {
      "español": "[Yo] {Haré} (sopa de pollo)",
      "ingles": "[I] {will make} (chicken soup)",
      "aleman": "[Ich] {werde machen} (Hühnersuppe)",
      "italiano": "[Io] {farò} (la zuppa di pollo)",
      "frances": "[Je] {ferai} (de la soupe au poulet)"
    },
    {
      "español": "[Yo] {Prepararé} (lentejas para el almuerzo)",
      "ingles": "[I] {will prepare} (lentils for lunch)",
      "aleman": "[Ich] {werde zubereiten} (Linsen zum Mittagessen)",
      "italiano": "[Io] {preparerò} (le lenticchie per pranzo)",
      "frances": "[Je] {préparerai} (des lentilles pour le déjeuner)"
    },
    {
      "español": "[Yo] {Haré} (muffins para desayunar)",
      "ingles": "[I] {will make} (muffins for breakfast)",
      "aleman": "[Ich] {werde machen} (Muffins zum Frühstück)",
      "italiano": "[Io] {farò} (i muffin per colazione)",
      "frances": "[Je] {ferai} (des muffins pour le petit-déjeuner)"
    },
    {
      "español": "[Yo] {Haré} (un café con leche)",
      "ingles": "[I] {will make} (a coffee with milk)",
      "aleman": "[Ich] {werde machen} (einen Kaffee mit Milch)",
      "italiano": "[Io] {farò} (un caffè latte)",
      "frances": "[Je] {ferai} (un café au lait)"
    },
    {
      "español": "[Yo] {Haré} (un té caliente para evitar un resfriado)",
      "ingles": "[I] {will make} (a hot tea to avoid a cold)",
      "aleman": "[Ich] {werde machen} (einen heißen Tee, um eine Erkältung zu vermeiden)",
      "italiano": "[Io] {farò} (una tisana calda per evitare il raffreddore)",
      "frances": "[Je] {ferai} (un thé chaud pour éviter un rhume)"
    },
    {
      "español": "(Hay) {carne y pollo} (en la nevera)",
      "ingles": "(There) {is} (meat and chicken in the fridge)",
      "aleman": "(Es) {gibt} (Fleisch und Hühnchen im Kühlschrank)",
      "italiano": "(C'è) {carne e pollo} (nel frigorifero)",
      "frances": "(Il y a) {de la viande et du poulet} (dans le réfrigérateur)"
    },
    {
      "español": "[Yo] {Voy a botar} (la basura hoy)",
      "ingles": "[I] {am going to throw out} (the trash today)",
      "aleman": "[Ich] {werde rausbringen} (den Müll heute)",
      "italiano": "[Io] {vado a buttare} (la spazzatura oggi)",
      "frances": "[Je] {vais jeter} (les ordures aujourd'hui)"
    },
    {
      "español": "[Yo] {Meteré} (la tarta en la nevera)",
      "ingles": "[I] {will put} (the cake in the fridge)",
      "aleman": "[Ich] {werde stellen} (den Kuchen in den Kühlschrank)",
      "italiano": "[Io] {metterò} (la torta in frigo)",
      "frances": "[Je] {mettrai} (le gâteau au réfrigérateur)"
    }
  ],
  "comedor": [
    {
      "español": "[Tú] {Ayúdame a traer} (los cubiertos y servilletas)",
      "ingles": "[You] {Help me bring} (the cutlery and napkins)",
      "aleman": "[Du] {Hilf mir, zu bringen} (das Besteck und die Servietten)",
      "italiano": "[Tu] {Aiutami a portare} (le posate e i tovaglioli)",
      "frances": "[Tu] {Aide-moi à apporter} (les couverts et les serviettes)"
    },
    {
      "español": "[Tú] {Te gusta} (la comida?)",
      "ingles": "[Do you] {like} (the food?)",
      "aleman": "[Du] {Magst} (das Essen?)",
      "italiano": "[Tu] {Ti piace} (il cibo?)",
      "frances": "[Tu] {Aimes} (la nourriture?)"
    },
    {
      "español": "[Tú] {Qué te gustó más} (de la comida?)",
      "ingles": "[What did you] {like most} (about the food?)",
      "aleman": "[Was hat dir] {am besten gefallen} (am Essen?)",
      "italiano": "[Cosa ti] {è piaciuto di più} (del cibo?)",
      "frances": "[Qu'est-ce que tu as] {préféré} (dans le repas?)"
    },
    {
      "español": "[Tú] {Quieres} (un vaso con agua?)",
      "ingles": "[Do you] {want} (a glass of water?)",
      "aleman": "[Du] {Möchtest} (ein Glas Wasser?)",
      "italiano": "[Tu] {Vuoi} (un bicchiere d'acqua?)",
      "frances": "[Tu] {veux} (un verre d'eau?)"
    },
    {
      "español": "[Tú] {Quieres comer} (el postre?)",
      "ingles": "[Do you] {want to eat} (dessert?)",
      "aleman": "[Du] {Möchtest essen} (den Nachtisch?)",
      "italiano": "[Tu] {Vuoi mangiare} (il dolce?)",
      "frances": "[Tu] {veux manger} (le dessert?)"
    },
    {
      "español": "[Tú] {Quedaste} (con hambre?)",
      "ingles": "[Are you] {still hungry?}",
      "aleman": "[Hast du] {noch Hunger?}",
      "italiano": "[Sei rimasto] {con fame?}",
      "frances": "[Tu as] {encore faim?}"
    },
    {
      "español": "[Tú] {Me pasas} (el cuchillo)",
      "ingles": "[You] {Pass me} (the knife)",
      "aleman": "[Du] {Gib mir} (das Messer)",
      "italiano": "[Tu] {Mi passi} (il coltello)",
      "frances": "[Tu] {Passe-moi} (le couteau)"
    },
    {
      "español": "[La mesa] {está sucia} (, ¿podrías limpiarla?)",
      "ingles": "[The table] {is dirty} (, could you clean it?)",
      "aleman": "[Der Tisch] {ist schmutzig} (, könntest du ihn abwischen?)",
      "italiano": "[Il tavolo] {è sporco} (, potresti pulirlo?)",
      "frances": "[La table] {est sale} (, pourrais-tu la nettoyer?)"
    },
    {
      "español": "[Yo] {Agradezco} (la comida, quedó sabrosa)",
      "ingles": "[I] {thank you} (for the food, it was delicious)",
      "aleman": "[Ich] {danke dir} (für das Essen, es war lecker)",
      "italiano": "[Io] {ti ringrazio} (per il cibo, era delizioso)",
      "frances": "[Je] {te remercie} (pour le repas, c'était délicieux)"
    }
  ],
  "dormitorio": [
    {
      "español": "[Yo] {Voy a tender} (la cama)",
      "ingles": "[I] {am going to make} (the bed)",
      "aleman": "[Ich] {werde machen} (das Bett)",
      "italiano": "[Io] {farò} (il letto)",
      "frances": "[Je] {vais faire} (le lit)"
    },
    {
      "español": "[Yo] {Necesito cambiar} (las sábanas)",
      "ingles": "[I] {need to change} (the sheets)",
      "aleman": "[Ich] {muss wechseln} (die Bettwäsche)",
      "italiano": "[Io] {devo cambiare} (le lenzuola)",
      "frances": "[Je] {dois changer} (les draps)"
    },
    {
      "español": "[La ventana] {está cerrada}, (voy a abrirla)",
      "ingles": "[The window] {is closed}, (I will open it)",
      "aleman": "[Das Fenster] {ist geschlossen}, (ich werde es öffnen)",
      "italiano": "[La finestra] {è chiusa}, (la aprirò)",
      "frances": "[La fenêtre] {est fermée}, (je vais l'ouvrir)"
    },
    {
      "español": "[Yo] {Debo ordenar} (el armario)",
      "ingles": "[I] {must organize} (the closet)",
      "aleman": "[Ich] {muss aufräumen} (den Schrank)",
      "italiano": "[Io] {devo ordinare} (l'armadio)",
      "frances": "[Je] {dois ranger} (l'armoire)"
    },
    {
      "español": "[La lámpara] {no funciona} (necesito cambiarla)",
      "ingles": "[The lamp] {doesn't work} (I need to change it)",
      "aleman": "[Die Lampe] {funktioniert nicht} (ich muss sie wechseln)",
      "italiano": "[La lampada] {non funziona} (devo cambiarla)",
      "frances": "[La lampe] {ne marche pas} (je dois la changer)"
    },
    {
      "español": "[Yo] {Voy a poner} (una alarma para mañana)",
      "ingles": "[I] {am going to set} (an alarm for tomorrow)",
      "aleman": "[Ich] {werde stellen} (einen Wecker für morgen)",
      "italiano": "[Io] {metterò} (una sveglia per domani)",
      "frances": "[Je] {vais mettre} (une alarme pour demain)"
    },
    {
      "español": "[El aire acondicionado] {está muy frío} (voy a ajustarlo)",
      "ingles": "[The air conditioning] {is too cold} (I will adjust it)",
      "aleman": "[Die Klimaanlage] {ist zu kalt} (ich werde sie anpassen)",
      "italiano": "[Il condizionatore] {è troppo freddo} (lo regolerò)",
      "frances": "[La climatisation] {est trop froide} (je vais l'ajuster)"
    }
],

"baño": [
    {
      "español": "[Yo] {Necesito limpiar} (el espejo)",
      "ingles": "[I] {need to clean} (the mirror)",
      "aleman": "[Ich] {muss putzen} (den Spiegel)",
      "italiano": "[Io] {devo pulire} (lo specchio)",
      "frances": "[Je] {dois nettoyer} (le miroir)"
    },
    {
      "español": "[Yo] {Voy a ducharme} (ahora)",
      "ingles": "[I] {am going to shower} (now)",
      "aleman": "[Ich] {werde duschen} (jetzt)",
      "italiano": "[Io] {farò la doccia} (adesso)",
      "frances": "[Je] {vais prendre une douche} (maintenant)"
    },
    {
      "español": "[No] {hay papel higiénico} (en el baño)",
      "ingles": "[There] {is no toilet paper} (in the bathroom)",
      "aleman": "[Es] {gibt kein Toilettenpapier} (im Bad)",
      "italiano": "[Non] {c'è carta igienica} (in bagno)",
      "frances": "[Il n'y a] {pas de papier toilette} (dans la salle de bain)"
    },
    {
      "español": "[El agua] {está fría} (hay que esperar)",
      "ingles": "[The water] {is cold} (we have to wait)",
      "aleman": "[Das Wasser] {ist kalt} (wir müssen warten)",
      "italiano": "[L'acqua] {è fredda} (dobbiamo aspettare)",
      "frances": "[L'eau] {est froide} (il faut attendre)"
    },
    {
      "español": "[Yo] {Necesito cambiar} (la cortina de la ducha)",
      "ingles": "[I] {need to change} (the shower curtain)",
      "aleman": "[Ich] {muss wechseln} (den Duschvorhang)",
      "italiano": "[Io] {devo cambiare} (la tenda della doccia)",
      "frances": "[Je] {dois changer} (le rideau de douche)"
    },
    {
      "español": "[El lavamanos] {está goteando} (hay que llamar al plomero)",
      "ingles": "[The sink] {is dripping} (we need to call the plumber)",
      "aleman": "[Das Waschbecken] {tropft} (wir müssen den Klempner rufen)",
      "italiano": "[Il lavandino] {gocciola} (dobbiamo chiamare l'idraulico)",
      "frances": "[Le lavabo] {goutte} (il faut appeler le plombier)"
    },
    {
      "español": "[Yo] {Voy a lavar} (las toallas)",
      "ingles": "[I] {am going to wash} (the towels)",
      "aleman": "[Ich] {werde waschen} (die Handtücher)",
      "italiano": "[Io] {laverò} (gli asciugamani)",
      "frances": "[Je] {vais laver} (les serviettes)"
    }
],

"sala": [
    {
      "español": "[Yo] {Voy a ver} (una película)",
      "ingles": "[I] {am going to watch} (a movie)",
      "aleman": "[Ich] {werde schauen} (einen Film)",
      "italiano": "[Io] {guarderò} (un film)",
      "frances": "[Je] {vais regarder} (un film)"
    },
    {
      "español": "[El control remoto] {está} (sobre la mesa)",
      "ingles": "[The remote control] {is} (on the table)",
      "aleman": "[Die Fernbedienung] {ist} (auf dem Tisch)",
      "italiano": "[Il telecomando] {è} (sul tavolo)",
      "frances": "[La télécommande] {est} (sur la table)"
    },
    {
      "español": "[Tú] {Puedes bajar} (el volumen)",
      "ingles": "[You] {Can lower} (the volume)",
      "aleman": "[Du] {Kannst senken} (die Lautstärke)",
      "italiano": "[Tu] {Puoi abbassare} (il volume)",
      "frances": "[Tu] {Peux baisser} (le volume)"
    },
    {
      "español": "[Las cortinas] {están sucias} (hay que lavarlas)",
      "ingles": "[The curtains] {are dirty} (we need to wash them)",
      "aleman": "[Die Vorhänge] {sind schmutzig} (wir müssen sie waschen)",
      "italiano": "[Le tende] {sono sporche} (dobbiamo lavarle)",
      "frances": "[Les rideaux] {sont sales} (il faut les laver)"
    },
    {
      "español": "[Yo] {Voy a aspirar} (la alfombra)",
      "ingles": "[I] {am going to vacuum} (the carpet)",
      "aleman": "[Ich] {werde staubsaugen} (den Teppich)",
      "italiano": "[Io] {aspirerò} (il tappeto)",
      "frances": "[Je] {vais aspirer} (le tapis)"
    },
    {
      "español": "[Los invitados] {llegarán} (en una hora)",
      "ingles": "[The guests] {will arrive} (in an hour)",
      "aleman": "[Die Gäste] {werden ankommen} (in einer Stunde)",
      "italiano": "[Gli ospiti] {arriveranno} (tra un'ora)",
      "frances": "[Les invités] {arriveront} (dans une heure)"
    },
    {
      "español": "[El sofá] {necesita} (una limpieza)",
      "ingles": "[The sofa] {needs} (cleaning)",
      "aleman": "[Das Sofa] {braucht} (eine Reinigung)",
      "italiano": "[Il divano] {ha bisogno di} (una pulizia)",
      "frances": "[Le canapé] {a besoin d'} (un nettoyage)"
    }
],

"oficina": [
    {
      "español": "[Yo] {Necesito imprimir} (estos documentos)",
      "ingles": "[I] {need to print} (these documents)",
      "aleman": "[Ich] {muss drucken} (diese Dokumente)",
      "italiano": "[Io] {devo stampare} (questi documenti)",
      "frances": "[Je] {dois imprimer} (ces documents)"
    },
    {
      "español": "[La computadora] {está lenta} (hoy)",
      "ingles": "[The computer] {is slow} (today)",
      "aleman": "[Der Computer] {ist langsam} (heute)",
      "italiano": "[Il computer] {è lento} (oggi)",
      "frances": "[L'ordinateur] {est lent} (aujourd'hui)"
    },
    {
      "español": "[Yo] {Tengo una reunión} (a las 3)",
      "ingles": "[I] {have a meeting} (at 3)",
      "aleman": "[Ich] {habe ein Meeting} (um 3)",
      "italiano": "[Io] {ho una riunione} (alle 3)",
      "frances": "[J'] {ai une réunion} (à 3 heures)"
    },
    {
      "español": "[La impresora] {se quedó sin tinta} (hay que cambiarla)",
      "ingles": "[The printer] {ran out of ink} (we need to change it)",
      "aleman": "[Der Drucker] {hat keine Tinte mehr} (wir müssen sie wechseln)",
      "italiano": "[La stampante] {è rimasta senza inchiostro} (dobbiamo cambiarla)",
      "frances": "[L'imprimante] {n'a plus d'encre} (il faut la changer)"
    },
    {
      "español": "[Yo] {Necesito organizar} (estos archivos)",
      "ingles": "[I] {need to organize} (these files)",
      "aleman": "[Ich] {muss organisieren} (diese Dateien)",
      "italiano": "[Io] {devo organizzare} (questi file)",
      "frances": "[Je] {dois organiser} (ces fichiers)"
    },
    {
      "español": "[El aire acondicionado] {no funciona} (en la oficina)",
      "ingles": "[The air conditioning] {doesn't work} (in the office)",
      "aleman": "[Die Klimaanlage] {funktioniert nicht} (im Büro)",
      "italiano": "[Il condizionatore] {non funziona} (in ufficio)",
      "frances": "[La climatisation] {ne fonctionne pas} (au bureau)"
    },
    {
      "español": "[Yo] {Debo actualizar} (el software)",
      "ingles": "[I] {need to update} (the software)",
      "aleman": "[Ich] {muss aktualisieren} (die Software)",
      "italiano": "[Io] {devo aggiornare} (il software)",
      "frances": "[Je] {dois mettre à jour} (le logiciel)"
    }
],
"ciudad": [
    {
      "español": "[El tráfico] {está terrible} (esta mañana)",
      "ingles": "[The traffic] {is terrible} (this morning)",
      "aleman": "[Der Verkehr] {ist schrecklich} (heute Morgen)",
      "italiano": "[Il traffico] {è terribile} (questa mattina)",
      "frances": "[La circulation] {est terrible} (ce matin)"
    },
    {
      "español": "[Yo] {Necesito tomar} (el metro)",
      "ingles": "[I] {need to take} (the subway)",
      "aleman": "[Ich] {muss nehmen} (die U-Bahn)",
      "italiano": "[Io] {devo prendere} (la metropolitana)",
      "frances": "[Je] {dois prendre} (le métro)"
    },
    {
      "español": "[El parque] {está lleno} (de gente)",
      "ingles": "[The park] {is full} (of people)",
      "aleman": "[Der Park] {ist voll} (mit Menschen)",
      "italiano": "[Il parco] {è pieno} (di gente)",
      "frances": "[Le parc] {est plein} (de gens)"
    },
    {
      "español": "[Los museos] {están cerrados} (los lunes)",
      "ingles": "[The museums] {are closed} (on Mondays)",
      "aleman": "[Die Museen] {sind geschlossen} (montags)",
      "italiano": "[I musei] {sono chiusi} (il lunedì)",
      "frances": "[Les musées] {sont fermés} (le lundi)"
    },
    {
      "español": "[Yo] {Voy a visitar} (el centro histórico)",
      "ingles": "[I] {am going to visit} (the historic center)",
      "aleman": "[Ich] {werde besuchen} (das historische Zentrum)",
      "italiano": "[Io] {visiterò} (il centro storico)",
      "frances": "[Je] {vais visiter} (le centre historique)"
    },
    {
      "español": "[El autobús] {llega tarde} (otra vez)",
      "ingles": "[The bus] {is running late} (again)",
      "aleman": "[Der Bus] {kommt zu spät} (wieder)",
      "italiano": "[L'autobus] {è in ritardo} (di nuovo)",
      "frances": "[Le bus] {est en retard} (encore)"
    },
    {
      "español": "[Las tiendas] {cierran} (a las nueve)",
      "ingles": "[The shops] {close} (at nine)",
      "aleman": "[Die Geschäfte] {schließen} (um neun)",
      "italiano": "[I negozi] {chiudono} (alle nove)",
      "frances": "[Les magasins] {ferment} (à neuf heures)"
    },
    {
      "español": "[La biblioteca] {abre} (temprano)",
      "ingles": "[The library] {opens} (early)",
      "aleman": "[Die Bibliothek] {öffnet} (früh)",
      "italiano": "[La biblioteca] {apre} (presto)",
      "frances": "[La bibliothèque] {ouvre} (tôt)"
    },
    {
      "español": "[Nosotros] {Debemos encontrar} (un estacionamiento)",
      "ingles": "[We] {need to find} (a parking spot)",
      "aleman": "[Wir] {müssen finden} (einen Parkplatz)",
      "italiano": "[Noi] {dobbiamo trovare} (un parcheggio)",
      "frances": "[Nous] {devons trouver} (une place de parking)"
    }
],

"vacaciones": [
    {
      "español": "[Yo] {Voy a reservar} (los billetes de avión)",
      "ingles": "[I] {am going to book} (the plane tickets)",
      "aleman": "[Ich] {werde buchen} (die Flugtickets)",
      "italiano": "[Io] {prenoterò} (i biglietti aerei)",
      "frances": "[Je] {vais réserver} (les billets d'avion)"
    },
    {
      "español": "[El hotel] {tiene} (una piscina hermosa)",
      "ingles": "[The hotel] {has} (a beautiful pool)",
      "aleman": "[Das Hotel] {hat} (einen schönen Pool)",
      "italiano": "[L'hotel] {ha} (una bella piscina)",
      "frances": "[L'hôtel] {a} (une belle piscine)"
    },
    {
      "español": "[Nosotros] {Necesitamos hacer} (las maletas)",
      "ingles": "[We] {need to pack} (the suitcases)",
      "aleman": "[Wir] {müssen packen} (die Koffer)",
      "italiano": "[Noi] {dobbiamo fare} (le valigie)",
      "frances": "[Nous] {devons faire} (les valises)"
    },
    {
      "español": "[El vuelo] {sale} (mañana temprano)",
      "ingles": "[The flight] {leaves} (early tomorrow)",
      "aleman": "[Der Flug] {geht} (morgen früh)",
      "italiano": "[Il volo] {parte} (domani presto)",
      "frances": "[Le vol] {part} (tôt demain)"
    },
    {
      "español": "[Yo] {Quiero visitar} (la playa)",
      "ingles": "[I] {want to visit} (the beach)",
      "aleman": "[Ich] {möchte besuchen} (den Strand)",
      "italiano": "[Io] {voglio visitare} (la spiaggia)",
      "frances": "[Je] {veux visiter} (la plage)"
    },
    {
      "español": "[El tiempo] {estará soleado} (toda la semana)",
      "ingles": "[The weather] {will be sunny} (all week)",
      "aleman": "[Das Wetter] {wird sonnig sein} (die ganze Woche)",
      "italiano": "[Il tempo] {sarà soleggiato} (tutta la settimana)",
      "frances": "[Le temps] {sera ensoleillé} (toute la semaine)"
    },
    {
      "español": "[Nosotros] {Debemos cambiar} (dinero)",
      "ingles": "[We] {need to exchange} (money)",
      "aleman": "[Wir] {müssen wechseln} (Geld)",
      "italiano": "[Noi] {dobbiamo cambiare} (i soldi)",
      "frances": "[Nous] {devons changer} (de l'argent)"
    },
    {
      "español": "[El pasaporte] {está} (en la maleta)",
      "ingles": "[The passport] {is} (in the suitcase)",
      "aleman": "[Der Pass] {ist} (im Koffer)",
      "italiano": "[Il passaporto] {è} (nella valigia)",
      "frances": "[Le passeport] {est} (dans la valise)"
    },
    {
      "español": "[Las excursiones] {están incluidas} (en el paquete)",
      "ingles": "[The excursions] {are included} (in the package)",
      "aleman": "[Die Ausflüge] {sind inbegriffen} (im Paket)",
      "italiano": "[Le escursioni] {sono incluse} (nel pacchetto)",
      "frances": "[Les excursions] {sont incluses} (dans le forfait)"
    }
],

"proyecto": [
    {
      "español": "[Nosotros] {Debemos entregar} (el informe mañana)",
      "ingles": "[We] {must deliver} (the report tomorrow)",
      "aleman": "[Wir] {müssen abgeben} (den Bericht morgen)",
      "italiano": "[Noi] {dobbiamo consegnare} (il rapporto domani)",
      "frances": "[Nous] {devons livrer} (le rapport demain)"
    },
    {
      "español": "[La presentación] {está lista} (para revisión)",
      "ingles": "[The presentation] {is ready} (for review)",
      "aleman": "[Die Präsentation] {ist fertig} (zur Überprüfung)",
      "italiano": "[La presentazione] {è pronta} (per la revisione)",
      "frances": "[La présentation] {est prête} (pour révision)"
    },
    {
      "español": "[El equipo] {trabajará} (este fin de semana)",
      "ingles": "[The team] {will work} (this weekend)",
      "aleman": "[Das Team] {wird arbeiten} (dieses Wochenende)",
      "italiano": "[Il team] {lavorerà} (questo fine settimana)",
      "frances": "[L'équipe] {travaillera} (ce week-end)"
    },
    {
      "español": "[Yo] {Necesito revisar} (los números)",
      "ingles": "[I] {need to review} (the numbers)",
      "aleman": "[Ich] {muss überprüfen} (die Zahlen)",
      "italiano": "[Io] {devo rivedere} (i numeri)",
      "frances": "[Je] {dois revoir} (les chiffres)"
    },
    {
      "español": "[El cliente] {quiere cambios} (en el diseño)",
      "ingles": "[The client] {wants changes} (in the design)",
      "aleman": "[Der Kunde] {möchte Änderungen} (im Design)",
      "italiano": "[Il cliente] {vuole cambiamenti} (nel design)",
      "frances": "[Le client] {veut des changements} (dans le design)"
    },
    {
      "español": "[La reunión] {será} (por videoconferencia)",
      "ingles": "[The meeting] {will be} (by videoconference)",
      "aleman": "[Das Meeting] {wird sein} (per Videokonferenz)",
      "italiano": "[La riunione] {sarà} (in videoconferenza)",
      "frances": "[La réunion] {sera} (par visioconférence)"
    },
    {
      "español": "[El presupuesto] {está ajustado} (este mes)",
      "ingles": "[The budget] {is tight} (this month)",
      "aleman": "[Das Budget] {ist knapp} (diesen Monat)",
      "italiano": "[Il budget] {è limitato} (questo mese)",
      "frances": "[Le budget] {est serré} (ce mois-ci)"
    },
    {
      "español": "[Nosotros] {Necesitamos más tiempo} (para terminar)",
      "ingles": "[We] {need more time} (to finish)",
      "aleman": "[Wir] {brauchen mehr Zeit} (zum Abschluss)",
      "italiano": "[Noi] {abbiamo bisogno di più tempo} (per finire)",
      "frances": "[Nous] {avons besoin de plus de temps} (pour finir)"
    },
    {
      "español": "[Los resultados] {son positivos} (hasta ahora)",
      "ingles": "[The results] {are positive} (so far)",
      "aleman": "[Die Ergebnisse] {sind positiv} (bis jetzt)",
      "italiano": "[I risultati] {sono positivi} (finora)",
      "frances": "[Les résultats] {sont positifs} (jusqu'à présent)"
    }
],

"mercado": [
    {
      "español": "[Yo] {Necesito comprar} (frutas y verduras)",
      "ingles": "[I] {need to buy} (fruits and vegetables)",
      "aleman": "[Ich] {muss kaufen} (Obst und Gemüse)",
      "italiano": "[Io] {devo comprare} (frutta e verdura)",
      "frances": "[Je] {dois acheter} (des fruits et légumes)"
    },
    {
      "español": "[Los precios] {han subido} (esta semana)",
      "ingles": "[The prices] {have gone up} (this week)",
      "aleman": "[Die Preise] {sind gestiegen} (diese Woche)",
      "italiano": "[I prezzi] {sono aumentati} (questa settimana)",
      "frances": "[Les prix] {ont augmenté} (cette semaine)"
    },
    {
      "español": "[El pescado] {está fresco} (hoy)",
      "ingles": "[The fish] {is fresh} (today)",
      "aleman": "[Der Fisch] {ist frisch} (heute)",
      "italiano": "[Il pesce] {è fresco} (oggi)",
      "frances": "[Le poisson] {est frais} (aujourd'hui)"
    },
    {
      "español": "[Yo] {Olvidé traer} (la lista de compras)",
      "ingles": "[I] {forgot to bring} (the shopping list)",
      "aleman": "[Ich] {habe vergessen} (die Einkaufsliste mitzubringen)",
      "italiano": "[Io] {ho dimenticato} (la lista della spesa)",
      "frances": "[J'] {ai oublié} (la liste des courses)"
    },
    {
      "español": "[Las ofertas] {terminan} (mañana)",
      "ingles": "[The offers] {end} (tomorrow)",
      "aleman": "[Die Angebote] {enden} (morgen)",
      "italiano": "[Le offerte] {finiscono} (domani)",
      "frances": "[Les offres] {se terminent} (demain)"
    },
    {
      "español": "[Nosotros] {Necesitamos un carrito} (de compras)",
      "ingles": "[We] {need a shopping} (cart)",
      "aleman": "[Wir] {brauchen einen Einkaufs} (wagen)",
      "italiano": "[Noi] {abbiamo bisogno di un carrello} (della spesa)",
      "frances": "[Nous] {avons besoin d'un chariot} (de courses)"
    },
    {
      "español": "[La caja] {está cerrada} (usa la automática)",
      "ingles": "[The checkout] {is closed} (use the self-checkout)",
      "aleman": "[Die Kasse] {ist geschlossen} (benutze die Selbstbedienungskasse)",
      "italiano": "[La cassa] {è chiusa} (usa quella automatica)",
      "frances": "[La caisse] {est fermée} (utilise la caisse automatique)"
    },
    {
      "español": "[El pan] {está recién horneado} (huele delicioso)",
      "ingles": "[The bread] {is freshly baked} (smells delicious)",
      "aleman": "[Das Brot] {ist frisch gebacken} (riecht köstlich)",
      "italiano": "[Il pane] {è appena sfornato} (profuma deliziosamente)",
      "frances": "[Le pain] {est fraîchement cuit} (sent délicieux)"
    },
    {
      "español": "[Yo] {Busco productos} (orgánicos)",
      "ingles": "[I] {am looking for} (organic products)",
      "aleman": "[Ich] {suche} (Bio-Produkte)",
      "italiano": "[Io] {cerco prodotti} (biologici)",
      "frances": "[Je] {cherche des produits} (biologiques)"
    }
],

"guarderia": [
    {
      "español": "[Los niños] {están jugando} (en el patio)",
      "ingles": "[The children] {are playing} (in the yard)",
      "aleman": "[Die Kinder] {spielen} (im Hof)",
      "italiano": "[I bambini] {stanno giocando} (nel cortile)",
      "frances": "[Les enfants] {jouent} (dans la cour)"
    },
    {
      "español": "[Es hora de] {la siesta} (para los pequeños)",
      "ingles": "[It's time for] {the nap} (for the little ones)",
      "aleman": "[Es ist Zeit für] {den Mittagsschlaf} (für die Kleinen)",
      "italiano": "[È ora della] {nanna} (per i piccoli)",
      "frances": "[C'est l'heure de] {la sieste} (pour les petits)"
    },
    {
      "español": "[La merienda] {será} (a las tres)",
      "ingles": "[The snack] {will be} (at three)",
      "aleman": "[Die Zwischenmahlzeit] {wird sein} (um drei)",
      "italiano": "[La merenda] {sarà} (alle tre)",
      "frances": "[Le goûter] {sera} (à trois heures)"
    },
    {
      "español": "[Nosotros] {Vamos a pintar} (con acuarelas)",
      "ingles": "[We] {are going to paint} (with watercolors)",
      "aleman": "[Wir] {werden malen} (mit Wasserfarben)",
      "italiano": "[Noi] {dipingeremo} (con gli acquarelli)",
      "frances": "[Nous] {allons peindre} (avec des aquarelles)"
    },
    {
      "español": "[El profesor] {leerá} (un cuento)",
      "ingles": "[The teacher] {will read} (a story)",
      "aleman": "[Der Lehrer] {wird vorlesen} (eine Geschichte)",
      "italiano": "[L'insegnante] {leggerà} (una storia)",
      "frances": "[Le professeur] {lira} (une histoire)"
    },
    {
      "español": "[Los padres] {deben recoger} (a los niños antes de las cinco)",
      "ingles": "[Parents] {must pick up} (the children before five)",
      "aleman": "[Die Eltern] {müssen abholen} (die Kinder vor fünf)",
      "italiano": "[I genitori] {devono prendere} (i bambini prima delle cinque)",
      "frances": "[Les parents] {doivent récupérer} (les enfants avant cinq heures)"
    },
    {
      "español": "[El patio] {está mojado} (por la lluvia)",
      "ingles": "[The playground] {is wet} (from the rain)",
      "aleman": "[Der Spielplatz] {ist nass} (vom Regen)",
      "italiano": "[Il cortile] {è bagnato} (per la pioggia)",
      "frances": "[La cour] {est mouillée} (à cause de la pluie)"
    },
    {
      "español": "[Nosotros] {Haremos manualidades} (esta tarde)",
      "ingles": "[We] {will do crafts} (this afternoon)",
      "aleman": "[Wir] {werden basteln} (heute Nachmittag)",
      "italiano": "[Noi] {faremo lavori manuali} (questo pomeriggio)",
      "frances": "[Nous] {ferons du bricolage} (cet après-midi)"
    },
    {
      "español": "[Los juguetes] {deben guardarse} (en su lugar)",
      "ingles": "[The toys] {must be put away} (in their place)",
      "aleman": "[Die Spielzeuge] {müssen aufgeräumt werden} (an ihren Platz)",
      "italiano": "[I giocattoli] {devono essere riposti} (al loro posto)",
      "frances": "[Les jouets] {doivent être rangés} (à leur place)"
    }
],
"colegio": [
    {
      "español": "[Los estudiantes] {tienen examen} (de matemáticas)",
      "ingles": "[The students] {have a test} (in mathematics)",
      "aleman": "[Die Schüler] {haben eine Prüfung} (in Mathematik)",
      "italiano": "[Gli studenti] {hanno un esame} (di matematica)",
      "frances": "[Les élèves] {ont un examen} (de mathématiques)"
    },
    {
      "español": "[La clase] {comienza} (a las ocho)",
      "ingles": "[The class] {starts} (at eight)",
      "aleman": "[Der Unterricht] {beginnt} (um acht)",
      "italiano": "[La lezione] {inizia} (alle otto)",
      "frances": "[La classe] {commence} (à huit heures)"
    },
    {
      "español": "[Yo] {Olvidé traer} (mi tarea)",
      "ingles": "[I] {forgot to bring} (my homework)",
      "aleman": "[Ich] {habe vergessen} (meine Hausaufgaben mitzubringen)",
      "italiano": "[Io] {ho dimenticato} (i miei compiti)",
      "frances": "[J'] {ai oublié d'apporter} (mes devoirs)"
    },
    {
      "español": "[El profesor] {está explicando} (la lección)",
      "ingles": "[The teacher] {is explaining} (the lesson)",
      "aleman": "[Der Lehrer] {erklärt} (die Lektion)",
      "italiano": "[L'insegnante] {sta spiegando} (la lezione)",
      "frances": "[Le professeur] {explique} (la leçon)"
    },
    {
      "español": "[El recreo] {dura} (treinta minutos)",
      "ingles": "[The break] {lasts} (thirty minutes)",
      "aleman": "[Die Pause] {dauert} (dreißig Minuten)",
      "italiano": "[La ricreazione] {dura} (trenta minuti)",
      "frances": "[La récréation] {dure} (trente minutes)"
    },
    {
      "español": "[Nosotros] {Tenemos educación física} (en el gimnasio)",
      "ingles": "[We] {have physical education} (in the gym)",
      "aleman": "[Wir] {haben Sportunterricht} (in der Turnhalle)",
      "italiano": "[Noi] {abbiamo educazione fisica} (in palestra)",
      "frances": "[Nous] {avons éducation physique} (dans le gymnase)"
    },
    {
      "español": "[La biblioteca] {está abierta} (durante el almuerzo)",
      "ingles": "[The library] {is open} (during lunch)",
      "aleman": "[Die Bibliothek] {ist geöffnet} (während der Mittagspause)",
      "italiano": "[La biblioteca] {è aperta} (durante il pranzo)",
      "frances": "[La bibliothèque] {est ouverte} (pendant le déjeuner)"
    },
    {
      "español": "[Los padres] {deben firmar} (las calificaciones)",
      "ingles": "[Parents] {must sign} (the grades)",
      "aleman": "[Die Eltern] {müssen unterschreiben} (die Noten)",
      "italiano": "[I genitori] {devono firmare} (i voti)",
      "frances": "[Les parents] {doivent signer} (les notes)"
    },
    {
      "español": "[La excursión] {será} (el próximo viernes)",
      "ingles": "[The field trip] {will be} (next Friday)",
      "aleman": "[Der Ausflug] {wird sein} (nächsten Freitag)",
      "italiano": "[La gita] {sarà} (venerdì prossimo)",
      "frances": "[La sortie scolaire] {sera} (vendredi prochain)"
    }
],
"pago_y_cobro": [
    {
      "español": "[Yo] {Necesito pagar} (la factura de luz)",
      "ingles": "[I] {need to pay} (the electricity bill)",
      "aleman": "[Ich] {muss bezahlen} (die Stromrechnung)",
      "italiano": "[Io] {devo pagare} (la bolletta della luce)",
      "frances": "[Je] {dois payer} (la facture d'électricité)"
    },
    {
      "español": "[El pago] {se realizará} (por transferencia bancaria)",
      "ingles": "[The payment] {will be made} (by bank transfer)",
      "aleman": "[Die Zahlung] {wird erfolgen} (per Banküberweisung)",
      "italiano": "[Il pagamento] {sarà effettuato} (tramite bonifico bancario)",
      "frances": "[Le paiement] {sera effectué} (par virement bancaire)"
    },
    {
      "español": "[La tarjeta] {fue rechazada} (por el sistema)",
      "ingles": "[The card] {was declined} (by the system)",
      "aleman": "[Die Karte] {wurde abgelehnt} (vom System)",
      "italiano": "[La carta] {è stata rifiutata} (dal sistema)",
      "frances": "[La carte] {a été refusée} (par le système)"
    },
    {
      "español": "[Yo] {Debo cobrar} (el cheque antes del viernes)",
      "ingles": "[I] {need to cash} (the check before Friday)",
      "aleman": "[Ich] {muss einlösen} (den Scheck vor Freitag)",
      "italiano": "[Io] {devo incassare} (l'assegno prima di venerdì)",
      "frances": "[Je] {dois encaisser} (le chèque avant vendredi)"
    },
    {
      "español": "[El salario] {se deposita} (el día 30)",
      "ingles": "[The salary] {is deposited} (on the 30th)",
      "aleman": "[Das Gehalt] {wird überwiesen} (am 30.)",
      "italiano": "[Lo stipendio] {viene depositato} (il 30)",
      "frances": "[Le salaire] {est versé} (le 30)"
    },
    {
      "español": "[La cuota] {está vencida} (desde ayer)",
      "ingles": "[The payment] {is overdue} (since yesterday)",
      "aleman": "[Die Rate] {ist überfällig} (seit gestern)",
      "italiano": "[La rata] {è scaduta} (da ieri)",
      "frances": "[L'échéance] {est dépassée} (depuis hier)"
    },
    {
      "español": "[Nosotros] {Aceptamos} (todas las tarjetas de crédito)",
      "ingles": "[We] {accept} (all credit cards)",
      "aleman": "[Wir] {akzeptieren} (alle Kreditkarten)",
      "italiano": "[Noi] {accettiamo} (tutte le carte di credito)",
      "frances": "[Nous] {acceptons} (toutes les cartes de crédit)"
    },
    {
      "español": "[El recibo] {debe guardarse} (para la garantía)",
      "ingles": "[The receipt] {must be kept} (for the warranty)",
      "aleman": "[Die Quittung] {muss aufbewahrt werden} (für die Garantie)",
      "italiano": "[Lo scontrino] {deve essere conservato} (per la garanzia)",
      "frances": "[Le reçu] {doit être gardé} (pour la garantie)"
    },
    {
      "español": "[La comisión] {será del} (tres por ciento)",
      "ingles": "[The commission] {will be} (three percent)",
      "aleman": "[Die Provision] {wird betragen} (drei Prozent)",
      "italiano": "[La commissione] {sarà del} (tre percento)",
      "frances": "[La commission] {sera de} (trois pour cent)"
    }
],

"entrevistas_laborales": [
    {
      "español": "[La entrevista] {será} (a las diez de la mañana)",
      "ingles": "[The interview] {will be} (at ten in the morning)",
      "aleman": "[Das Vorstellungsgespräch] {wird sein} (um zehn Uhr morgens)",
      "italiano": "[Il colloquio] {sarà} (alle dieci del mattino)",
      "frances": "[L'entretien] {sera} (à dix heures du matin)"
    },
    {
      "español": "[Yo] {Debo llevar} (mi currículum actualizado)",
      "ingles": "[I] {must bring} (my updated resume)",
      "aleman": "[Ich] {muss mitbringen} (meinen aktualisierten Lebenslauf)",
      "italiano": "[Io] {devo portare} (il mio curriculum aggiornato)",
      "frances": "[Je] {dois apporter} (mon CV mis à jour)"
    },
    {
      "español": "[El entrevistador] {preguntará sobre} (mi experiencia laboral)",
      "ingles": "[The interviewer] {will ask about} (my work experience)",
      "aleman": "[Der Interviewer] {wird fragen nach} (meiner Berufserfahrung)",
      "italiano": "[L'intervistatore] {chiederà della} (mia esperienza lavorativa)",
      "frances": "[L'interviewer] {demandera} (mon expérience professionnelle)"
    },
    {
      "español": "[Yo] {Debo vestir} (de manera formal)",
      "ingles": "[I] {must dress} (formally)",
      "aleman": "[Ich] {muss mich kleiden} (formell)",
      "italiano": "[Io] {devo vestirmi} (in modo formale)",
      "frances": "[Je] {dois m'habiller} (de façon formelle)"
    },
    {
      "español": "[La empresa] {ofrece} (un buen paquete de beneficios)",
      "ingles": "[The company] {offers} (a good benefits package)",
      "aleman": "[Das Unternehmen] {bietet} (ein gutes Leistungspaket)",
      "italiano": "[L'azienda] {offre} (un buon pacchetto di benefici)",
      "frances": "[L'entreprise] {offre} (un bon package d'avantages)"
    },
    {
      "español": "[Ellos] {Quieren saber} (mis pretensiones salariales)",
      "ingles": "[They] {want to know} (my salary expectations)",
      "aleman": "[Sie] {wollen wissen} (meine Gehaltsvorstellungen)",
      "italiano": "[Loro] {vogliono sapere} (le mie aspettative salariali)",
      "frances": "[Ils] {veulent connaître} (mes prétentions salariales)"
    },
    {
      "español": "[La posición] {requiere} (disponibilidad inmediata)",
      "ingles": "[The position] {requires} (immediate availability)",
      "aleman": "[Die Position] {erfordert} (sofortige Verfügbarkeit)",
      "italiano": "[La posizione] {richiede} (disponibilità immediata)",
      "frances": "[Le poste] {requiert} (une disponibilité immédiate)"
    },
    {
      "español": "[Yo] {Tengo preparadas} (todas las referencias)",
      "ingles": "[I] {have prepared} (all the references)",
      "aleman": "[Ich] {habe vorbereitet} (alle Referenzen)",
      "italiano": "[Io] {ho preparato} (tutte le referenze)",
      "frances": "[J'] {ai préparé} (toutes les références)"
    },
    {
      "español": "[La segunda entrevista] {será} (con el director general)",
      "ingles": "[The second interview] {will be} (with the general manager)",
      "aleman": "[Das zweite Gespräch] {wird sein} (mit dem Geschäftsführer)",
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
        "aleman": ["schneiden", "reiben", "machen", "zubereiten", "rausbringen", "stellen"],
        "italiano": ["tagliare", "grattugiare", "fare", "preparare", "buttare", "mettere"],
        "frances": ["couper", "râper", "faire", "préparer", "jeter", "mettre"]
      },
      "sustantivos": {
        "español": ["verduras", "queso", "sopa", "pollo", "lentejas", "café", "té", "nevera", "basura", "tarta"],
        "ingles": ["vegetables", "cheese", "soup", "chicken", "lentils", "coffee", "tea", "fridge", "trash", "cake"],
        "aleman": ["das Gemüse", "der Käse", "die Suppe", "das Huhn", "die Linsen", "der Kaffee", "der Tee", "der Kühlschrank", "der Müll", "der Kuchen"],
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
        "aleman": ["bringen", "mögen", "wollen", "geben", "abwischen", "danken"],
        "italiano": ["portare", "piacere", "volere", "passare", "pulire", "ringraziare"],
        "frances": ["apporter", "aimer", "vouloir", "passer", "nettoyer", "remercier"]
      },
      "sustantivos": {
        "español": ["cubiertos", "servilletas", "comida", "vaso", "agua", "postre", "cuchillo", "mesa"],
        "ingles": ["cutlery", "napkins", "food", "glass", "water", "dessert", "knife", "table"],
        "aleman": ["das Besteck", "die Servietten", "das Essen", "das Glas", "das Wasser", "der Nachtisch", "das Messer", "der Tisch"],
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
        "aleman": ["machen", "wechseln", "öffnen", "aufräumen", "funktionieren", "stellen", "anpassen"],
        "italiano": ["fare", "cambiare", "aprire", "ordinare", "funzionare", "mettere", "regolare"],
        "frances": ["faire", "changer", "ouvrir", "ranger", "marcher", "mettre", "ajuster"]
      },
      "sustantivos": {
        "español": ["cama", "sábanas", "ventana", "armario", "lámpara", "alarma", "aire acondicionado"],
        "ingles": ["bed", "sheets", "window", "closet", "lamp", "alarm", "air conditioning"],
        "aleman": ["das Bett", "die Bettwäsche", "das Fenster", "der Schrank", "die Lampe", "der Wecker", "die Klimaanlage"],
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
        "aleman": ["putzen", "duschen", "wechseln", "tropfen", "waschen", "warten"],
        "italiano": ["pulire", "fare la doccia", "cambiare", "gocciolare", "lavare", "aspettare"],
        "frances": ["nettoyer", "prendre une douche", "changer", "goutter", "laver", "attendre"]
      },
      "sustantivos": {
        "español": ["espejo", "ducha", "papel higiénico", "agua", "cortina", "lavamanos", "toallas", "plomero"],
        "ingles": ["mirror", "shower", "toilet paper", "water", "curtain", "sink", "towels", "plumber"],
        "aleman": ["der Spiegel", "die Dusche", "das Toilettenpapier", "das Wasser", "der Vorhang", "das Waschbecken", "die Handtücher", "der Klempner"],
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
        "aleman": ["schauen", "senken", "staubsaugen", "ankommen", "reinigen", "brauchen"],
        "italiano": ["guardare", "abbassare", "aspirare", "arrivare", "pulire", "avere bisogno"],
        "frances": ["regarder", "baisser", "aspirer", "arriver", "nettoyer", "avoir besoin"]
      },
      "sustantivos": {
        "español": ["película", "control remoto", "volumen", "cortinas", "alfombra", "invitados", "sofá"],
        "ingles": ["movie", "remote control", "volume", "curtains", "carpet", "guests", "sofa"],
        "aleman": ["der Film", "die Fernbedienung", "die Lautstärke", "die Vorhänge", "der Teppich", "die Gäste", "das Sofa"],
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
        "aleman": ["drucken", "organisieren", "aktualisieren", "funktionieren", "haben", "treffen"],
        "italiano": ["stampare", "organizzare", "aggiornare", "funzionare", "avere", "riunire"],
        "frances": ["imprimer", "organiser", "mettre à jour", "fonctionner", "avoir", "réunir"]
      },
      "sustantivos": {
        "español": ["documentos", "computadora", "reunión", "impresora", "archivos", "aire acondicionado", "software"],
        "ingles": ["documents", "computer", "meeting", "printer", "files", "air conditioning", "software"],
        "aleman": ["die Dokumente", "der Computer", "das Meeting", "der Drucker", "die Dateien", "die Klimaanlage", "die Software"],
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
        "aleman": ["besuchen", "nehmen", "schließen", "öffnen", "finden", "ankommen"],
        "italiano": ["visitare", "prendere", "chiudere", "aprire", "trovare", "arrivare"],
        "frances": ["visiter", "prendre", "fermer", "ouvrir", "trouver", "arriver"]
      },
      "sustantivos": {
        "español": ["tráfico", "metro", "parque", "museos", "centro histórico", "autobús", "tiendas", "biblioteca", "estacionamiento"],
        "ingles": ["traffic", "subway", "park", "museums", "historic center", "bus", "shops", "library", "parking"],
        "aleman": ["der Verkehr", "die U-Bahn", "der Park", "die Museen", "das historische Zentrum", "der Bus", "die Geschäfte", "die Bibliothek", "der Parkplatz"],
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
        "aleman": ["buchen", "packen", "gehen", "besuchen", "wechseln", "inbegriffen"],
        "italiano": ["prenotare", "fare", "partire", "visitare", "cambiare", "includere"],
        "frances": ["réserver", "faire", "partir", "visiter", "changer", "inclure"]
      },
      "sustantivos": {
        "español": ["billetes", "hotel", "maletas", "vuelo", "playa", "tiempo", "dinero", "pasaporte", "excursiones"],
        "ingles": ["tickets", "hotel", "suitcases", "flight", "beach", "weather", "money", "passport", "excursions"],
        "aleman": ["die Flugtickets", "das Hotel", "die Koffer", "der Flug", "der Strand", "das Wetter", "das Geld", "der Pass", "die Ausflüge"],
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
        "aleman": ["abgeben", "überprüfen", "arbeiten", "wollen", "brauchen", "abschließen"],
        "italiano": ["consegnare", "rivedere", "lavorare", "volere", "avere bisogno", "finire"],
        "frances": ["livrer", "revoir", "travailler", "vouloir", "avoir besoin", "finir"]
      },
      "sustantivos": {
        "español": ["informe", "presentación", "equipo", "números", "cliente", "diseño", "reunión", "presupuesto", "resultados"],
        "ingles": ["report", "presentation", "team", "numbers", "client", "design", "meeting", "budget", "results"],
        "aleman": ["der Bericht", "die Präsentation", "das Team", "die Zahlen", "der Kunde", "das Design", "das Meeting", "das Budget", "die Ergebnisse"],
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
        "aleman": ["kaufen", "steigen", "vergessen", "enden", "brauchen", "suchen"],
        "italiano": ["comprare", "aumentare", "dimenticare", "finire", "avere bisogno", "cercare"],
        "frances": ["acheter", "augmenter", "oublier", "terminer", "avoir besoin", "chercher"]
      },
      "sustantivos": {
        "español": ["frutas", "verduras", "precios", "pescado", "lista", "ofertas", "carrito", "caja", "pan", "productos"],
        "ingles": ["fruits", "vegetables", "prices", "fish", "list", "offers", "cart", "checkout", "bread", "products"],
        "aleman": ["das Obst", "das Gemüse", "die Preise", "der Fisch", "die Liste", "die Angebote", "der Einkaufswagen", "die Kasse", "das Brot", "die Produkte"],
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
        "aleman": ["spielen", "schlafen", "malen", "vorlesen", "abholen", "aufräumen"],
        "italiano": ["giocare", "dormire", "dipingere", "leggere", "prendere", "riporre"],
        "frances": ["jouer", "dormir", "peindre", "lire", "récupérer", "ranger"]
      },
      "sustantivos": {
        "español": ["niños", "siesta", "merienda", "acuarelas", "cuento", "padres", "patio", "manualidades", "juguetes"],
        "ingles": ["children", "nap", "snack", "watercolors", "story", "parents", "playground", "crafts", "toys"],
        "aleman": ["die Kinder", "der Mittagsschlaf", "die Zwischenmahlzeit", "die Wasserfarben", "die Geschichte", "die Eltern", "der Spielplatz", "das Basteln", "die Spielzeuge"],
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
        "aleman": ["studieren", "beginnen", "vergessen", "erklären", "dauern", "haben", "unterschreiben", "lernen", "lehren"],
        "italiano": ["studiare", "iniziare", "dimenticare", "spiegare", "durare", "avere", "firmare", "imparare", "insegnare"],
        "frances": ["étudier", "commencer", "oublier", "expliquer", "durer", "avoir", "signer", "apprendre", "enseigner"]
      },
      "sustantivos": {
        "español": ["estudiantes", "clase", "tarea", "profesor", "recreo", "gimnasio", "biblioteca", "calificaciones", "excursión"],
        "ingles": ["students", "class", "homework", "teacher", "break", "gym", "library", "grades", "field trip"],
        "aleman": ["die Schüler", "der Unterricht", "die Hausaufgaben", "der Lehrer", "die Pause", "die Turnhalle", "die Bibliothek", "die Noten", "der Ausflug"],
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
        "aleman": ["bezahlen", "durchführen", "ablehnen", "einlösen", "einzahlen", "verfallen", "akzeptieren", "aufbewahren", "überweisen"],
        "italiano": ["pagare", "effettuare", "rifiutare", "incassare", "depositare", "scadere", "accettare", "conservare", "trasferire"],
        "frances": ["payer", "effectuer", "refuser", "encaisser", "déposer", "expirer", "accepter", "garder", "transférer"]
      },
      "sustantivos": {
        "español": ["factura", "transferencia", "tarjeta", "cheque", "salario", "cuota", "recibo", "comisión", "sistema"],
        "ingles": ["bill", "transfer", "card", "check", "salary", "payment", "receipt", "commission", "system"],
        "aleman": ["die Rechnung", "die Überweisung", "die Karte", "der Scheck", "das Gehalt", "die Rate", "die Quittung", "die Provision", "das System"],
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
        "aleman": ["interviewen", "mitbringen", "fragen", "kleiden", "anbieten", "wollen", "erfordern", "vorbereiten", "einstellen"],
        "italiano": ["intervistare", "portare", "chiedere", "vestire", "offrire", "volere", "richiedere", "preparare", "assumere"],
        "frances": ["interviewer", "apporter", "demander", "habiller", "offrir", "vouloir", "requérir", "préparer", "embaucher"]
      },
      "sustantivos": {
        "español": ["entrevista", "currículum", "experiencia", "empresa", "beneficios", "salario", "posición", "referencias", "director"],
        "ingles": ["interview", "resume", "experience", "company", "benefits", "salary", "position", "references", "manager"],
        "aleman": ["das Vorstellungsgespräch", "der Lebenslauf", "die Erfahrung", "das Unternehmen", "die Leistungen", "das Gehalt", "die Position", "die Referenzen", "der Geschäftsführer"],
        "italiano": ["colloquio", "curriculum", "esperienza", "azienda", "benefici", "stipendio", "posizione", "referenze", "direttore"],
        "frances": ["entretien", "CV", "expérience", "entreprise", "avantages", "salaire", "poste", "références", "directeur"]
      }
    }
]
};


// Modificar la función cambiarHabitacion para incluir la actualización de la tabla
function cambiarHabitacion(habitacion) {
  const habitacionDiv = document.getElementById('habitacion');
  habitacionDiv.innerHTML = ''; // Limpiar contenido anterior

  // Crear elementos para las frases
  frases[habitacion].forEach(frase => {
    const fraseDiv = document.createElement('div');
    fraseDiv.classList.add('frase');
    fraseDiv.innerHTML = `
      <p class="español">Español: ${frase.español}</p>
      <p class="ingles">Inglés: ${frase.ingles}</p>
      <p class="aleman">Alemán: ${frase.aleman}</p>
      <p class="italiano">Italiano: ${frase.italiano}</p>
      <p class="frances">Francés: ${frase.frances}</p>
    `;
    habitacionDiv.appendChild(fraseDiv);
  });

  // Actualizar la tabla de diccionario
  actualizarTablaDiccionario(habitacion);

  // Efecto de cambio de página
  habitacionDiv.style.transform = `rotateY(${habitacion === 'cocina' ? '0deg' : '360deg'})`;
}


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