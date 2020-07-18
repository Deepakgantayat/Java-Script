//const colors = [['white', 'peace'] ['green', 'prosperity']]

function arr2obj(colors){
    const result = {}
    for(const ele of colors){
        result[ele[ele]] = ele
    }
    
    
    //  for(i = 0; i<colors.length; i++){
    //      result.arr[i][0] = arr[i][1] 
    //  }
     return result

    }
    console.log(arr2obj([['white', 'peace'], ['green', 'prosperity']]))