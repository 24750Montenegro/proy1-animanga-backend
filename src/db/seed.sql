TRUNCATE TABLE ratings, comments, chapters, series RESTART IDENTITY CASCADE;

INSERT INTO series (title, synopsis, type) VALUES
  ('Dr. Stone', 'Tras un fenomeno que petrifica a toda la humanidad, Senku Ishigami despierta miles de anios despues y decide reconstruir la civilizacion usando la ciencia.', 'anime'),
  ('Fire Force', 'En un mundo donde las personas pueden combustionar espontaneamente, la Compania 8 lucha contra los Infernales y descubre la verdad detras del fenomeno.', 'anime'),
  ('One Piece', 'Monkey D. Luffy zarpa con su tripulacion de los Sombrero de Paja en busca del legendario tesoro One Piece para convertirse en el Rey de los Piratas.', 'anime'),
  ('Naruto Shippuden', 'Naruto Uzumaki regresa tras dos anios y medio de entrenamiento para enfrentar a Akatsuki y proteger a sus amigos en una guerra ninja a gran escala.', 'anime'),
  ('Oshi no Ko', 'Un medico y su paciente terminal renacen como los hijos gemelos de su idol favorita, descubriendo el lado oscuro de la industria del entretenimiento japonesa.', 'anime'),
  ('Shigatsu wa Kimi no Uso', 'Kosei Arima, un prodigio del piano que perdio la capacidad de oir su propia musica, vuelve a tocar gracias a una violinista llamada Kaori Miyazono.', 'anime');

INSERT INTO chapters (series_id, number, title) VALUES
  (1, 1, 'Stone World'),
  (1, 2, 'King of the Stone World'),
  (1, 3, 'Weapons of Science'),
  (1, 4, 'Fire the Smoke Signal'),
  (1, 5, 'Stone Road'),

  (2, 1, 'Shinra Kusakabe Enlists'),
  (2, 2, 'The Heart of a Fire Soldier'),
  (2, 3, 'The Rookie Fire Soldier Games'),
  (2, 4, 'The Hero and the Princess'),
  (2, 5, 'Black and White, and Grey'),

  (3, 1, 'Im Luffy! The Man Whos Gonna Be King of the Pirates!'),
  (3, 2, 'The Great Swordsman Appears'),
  (3, 3, 'Morgan vs. Luffy'),
  (3, 4, 'Luffys Past! The Red-Haired Shanks Appears!'),
  (3, 5, 'Fear, Mysterious Power! Pirate Clown Captain Buggy!'),
  (3, 6, 'Desperate Situation! Beast Tamer Mohji vs. Luffy!'),
  (3, 7, 'Grand Duel! Zoro the Swordsman vs. Cabaji the Acrobat!'),

  (4, 1, 'Homecoming'),
  (4, 2, 'The Akatsuki Makes Its Move'),
  (4, 3, 'The Results of Training'),
  (4, 4, 'Jinchuriki of the Sand'),
  (4, 5, 'The Kazekage Stands Tall'),
  (4, 6, 'Mission Cleared'),

  (5, 1, 'Mother and Children'),
  (5, 2, 'Targets'),
  (5, 3, 'Reality Show'),
  (5, 4, 'Idol'),
  (5, 5, 'Original'),

  (6, 1, 'Monotone / Colorful'),
  (6, 2, 'Friend A'),
  (6, 3, 'Inside Spring'),
  (6, 4, 'The Journey'),
  (6, 5, 'Goodbye, Hero');

INSERT INTO ratings (series_id, score) VALUES
  (1, 9), (1, 10), (1, 8), (1, 9),
  (2, 8), (2, 7), (2, 9), (2, 8),
  (3, 10), (3, 10), (3, 9), (3, 10), (3, 8),
  (4, 9), (4, 10), (4, 9), (4, 8),
  (5, 9), (5, 10), (5, 8),
  (6, 10), (6, 10), (6, 9), (6, 10);

INSERT INTO comments (series_id, chapter_id, author, content) VALUES
  (1, NULL, 'TaiyoFan', 'La mezcla de ciencia y aventura es brillante, Senku es un genio.'),
  (1, NULL, 'KohakuLover', 'El ritmo de la historia engancha desde el primer episodio.'),
  (2, NULL, 'BurningSoul', 'La animacion del fuego es una locura, Studio David Production se lucio.'),
  (3, NULL, 'StrawHat99', 'Despues de 1000 capitulos sigue siendo el mejor shounen de todos los tiempos.'),
  (3, NULL, 'GrandLineFan', 'Wano arc fue una obra maestra absoluta.'),
  (4, NULL, 'NinjaWay', 'La pelea de Pain sigue siendo uno de los mejores momentos del anime.'),
  (5, NULL, 'AquaStan', 'La cancion de YOASOBI Idol me dio escalofrios la primera vez.'),
  (6, NULL, 'PianoTears', 'Llore como nunca con el final, Kaori para siempre en el corazon.'),
  (NULL, 1, 'CienciaPower', 'El opening del primer capitulo te mete en el mundo al instante.'),
  (NULL, 11, 'PirateKing', 'El primer episodio de One Piece es historico, Shanks aun no aparecia tanto.'),
  (NULL, 18, 'SasukeFan', 'El reencuentro del equipo 7 con Naruto despues de los 2 anios fue emocionante.'),
  (NULL, 24, 'GoroDocu', 'El primer capitulo te rompe en mil pedazos sin avisar.'),
  (NULL, 29, 'MelodyHeart', 'La escena del concurso es pura emocion, la musica te transporta.');
