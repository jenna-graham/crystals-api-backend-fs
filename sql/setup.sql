-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists crystals;

CREATE table crystals (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    color VARCHAR NOT NULL,
    zodiac VARCHAR NOT NULL,
    properties VARCHAR NOT NULL
);

INSERT INTO crystals (name, color, zodiac, properties) VALUES
('Snowflake Obsidian', 'black/white', 'Virgo', 'purity and balance'),
('Amethyst', 'purple', 'Capricorn', 'Spirituality and meditation'),
('Carnelean', 'red', 'Taurus', 'Stabilizing energies'),
('Malachite', 'green', 'Scorpio', 'Transformations'),
('Rose Quartz', 'pink', 'Taurus', 'Emotional healing'),
('Moonstone', 'beige', 'Libra', 'New beginnings and confidence'),
('Citrine', 'yellow', 'Aries', 'Attracts and maintains wealth'),
('Tigers eye', 'brown', 'Capricorn', 'Clarity and optimism');