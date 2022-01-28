import React from 'react'
import { useProduct } from 'vtex.product-context'   
import { useCssHandles } from 'vtex.css-handles'

interface ProductSpecificationDomProps {
  specification?: string,
  group?: string,
  blockClass?: string,
  mode?: string
  
  

}

const CSS_HANDLES = [
  
  'containerEmpty',
  'specificationDomValue',
  'specificationDomField'
] as const; 

const ProductSpecificationDom: StorefrontFunctionComponent<ProductSpecificationDomProps> = (
  { specification = "",
    group = "",
    
  }
  
  ) => {

  const { handles } = useCssHandles(CSS_HANDLES);
    
  const productContextValue = useProduct();
  var thetext=loadField();

  


  function loadField(){
    var output=[];
    if(specification>="" && group >=""){


      var groups= productContextValue.product?.specificationGroups || false;
      
      if(groups.length>0){

        //ADD first switch here. We gotta continue searching for the name and return the "classic way"
        //we gotta pull all fields and all values in the group way, if a group is given.
        
        for(var i=0; i<groups.length; i++){
          //finding the field in the groups
          if(groups[i].originalName != group) continue;
                
                for(var j=0; j<groups[i].specifications.length; j++){ //The group is found, we look for names
                
                  if(groups[i].specifications[j].originalName != specification) continue; //not ours? skip!
                  output=groups[i].specifications[j].values; 
                  break;
                }

                break;
        }
      } 

      
    }
    return output;
  }
  


  function buildDom(){
    
    
    
    if(thetext.length==0){
      
      return <div className={handles.containerEmpty} ></div>;
    }
    else{
      
      
      
      return (
        <div className={handles.specificationDomField} >
            {joinDOM()}
        </div>
      )
      
    }


  }
  function joinDOM(){
    
        var output = [];
              for(var i=0; i<thetext.length; i++){
                output.push(<div className={handles.specificationDomValue} dangerouslySetInnerHTML={{ __html: thetext[i] }} />
                   
                  )
              }
    


    return output;
  }
  

  return ( <div>
    {buildDom()}
  </div> )
}


//Stuff for the site editor. Might not need it.
ProductSpecificationDom.schema = {
  title: 'editor.field.title',
  description: 'editor.field.description',
  type: 'object',
  properties: {

    specification: {
            title: 'Specification field name',
            description: 'in which field is the value stored?',
            type: 'string',
            default: undefined,
        }
  }
}

export default ProductSpecificationDom
