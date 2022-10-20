UPDATE
  "countries"
  set "name" = 'Murica'
  where "name" = 'United States'
  returning *;
