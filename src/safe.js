export const IsJSON =  (candidate) =>
   new Promise(
     (resolve, reject) => resolve(JSON.parse(candidate))
    )
;
