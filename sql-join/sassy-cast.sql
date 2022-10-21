select
  "actors"."firstName" as "firstName",
  "actors"."lastName" as "lastName",
  "films"."title"
from
  "films"
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
where
  "films"."title" = 'Jersey Sassy';
