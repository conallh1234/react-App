import _ from "lodash";

export function excerpt(string) {
  const truncate = _.truncate;
  return truncate(string, {
    length: 200, 
    separator: /,?\.* +/ 
  });
}