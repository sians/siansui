export function snakeToCamel(s){
  return s.replace(/(_\w)/g, function(m){return m[1].toUpperCase();});
}

export function snakeToPascal(s){
  let camel = snakeToCamel(s);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

export function camelToSnake(s){
  return s.replace(/[\w]([A-Z])/g, function(m) { return m[0] + "_" + m[1]; }).toLowerCase();
}

export function pascalToSnake(s){
  return s.replace(/(.[A-Z])/g, function(m) { return m[0] + "_" + m[1]; }).toLowerCase();
}


export default function convertCase(sourceCase, targetCase, str){
  let output = str;

  switch (sourceCase) {
      case 'snake':
          if (targetCase === 'camel') output = snakeToCamel(str);
          if (targetCase === 'pascal') output = snakeToPascal(str);
          break;
      case 'camel':
          if (targetCase === 'snake') output = camelToSnake(str);
          break;
      case 'pascal':
        if (targetCase === 'snake') output = pascalToSnake(str);
        break;  
      default:
          throw new Error(`Invalid sourceCase ${sourceCase}`);
  }

  return output;
}