const Node = (value)=>{
    var nextNode = null;

    return {value, nextNode}
}

const LinkedList = (()=>{
    Head = null;

    const append = (value)=>{
        var newNode = Node(value);
        if(Head == null){
            Head = newNode;
        }else{
            var temp = Head;
            while(temp.nextNode != null) temp = temp.nextNode;

            temp.nextNode = newNode;
        }
    }

    const prepend = (value)=>{
        var newNode = Node(value);
        newNode.nextNode = Head;
        Head = newNode;
    }

    const size = ()=>{
        if(Head == null) return 0;
        var temp = Head;
        for(i=1; temp.nextNode != null; i++){
            temp = temp.nextNode;
        }
        return i;
    }

    const head = ()=>{
        return Head.value;
    }

    const tail = ()=>{
        if(Head == null) return null;
        var temp = Head;
        while(temp.nextNode != null) temp = temp.nextNode;

        return temp;
    }

    const at = (index)=>{
        var temp = Head;
        for(var i=0; temp.nextNode != null; i++){
            if(i == index){
                break
            }
            temp = temp.nextNode;
        }

        if(index == i){
            return temp
        }else{
            return "out of index"
        }
    }

    const pop = ()=>{
        var temp = Head;
        var prev = null
        while(temp.nextNode != null){
            prev = temp;
            temp = temp.nextNode;
        }
        temp = prev;
        temp.nextNode = null
    }

    const contains = (value)=>{
        var temp = Head;
        var flag = false;
        while(temp.nextNode != null){
            if(value == temp.value){
                flag = true;
                break;
            }
            temp = temp.nextNode
        }
        if(temp.value == value) flag = true;
        return flag
    }

    const find = (value)=>{
        if(Head == null) return null
        var temp = Head;
        var i = 0
        while(temp.nextNode != null){
            if(temp.value == value) break;
            temp = temp.nextNode;
            i++
        }

        if(temp.value == value) return i;
        return null;
    }

    const toString =()=>{
        if(Head == null) return null
        var temp = Head;
        var str = '';
        while(temp.nextNode != null){
            str = str + `(${temp.value}) -> `
            temp = temp.nextNode;
        }
        str = str + `(${temp.value}) -> (null)`
        console.log(str);
    }

    const insertAt = (value, index)=>{
        var newNode = Node(value);
        if(index == 0){
            newNode.nextNode = Head;
            Head = newNode;
        }
        var temp = Head;
        var i = 0;
        while(temp.nextNode!=null){
            if(i == index-1){
                var nodes = temp.nextNode;
                newNode.nextNode = nodes;
                temp.nextNode = newNode;
            }
            temp = temp.nextNode;
            i++
        }
        if(i == index-1) temp.nextNode = newNode;
        return
    }

    const removeAt = (index)=>{
        if(index == 0){
            Head = Head.nextNode
        }
        var temp = Head;
        var i = 0;
        while(temp.nextNode!=null){
            if(i == index-1){
                temp.nextNode = temp.nextNode.nextNode;
                break;
            }
            temp = temp.nextNode;
            i++
        }
        return
    }

    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt}
})();

/*LinkedList.append(10);
LinkedList.append(11);
LinkedList.append(12);
LinkedList.prepend(13);
console.log(LinkedList.size());
console.log(LinkedList.head());
console.log(LinkedList.tail());
console.log(LinkedList.at(2));
LinkedList.pop()
console.log(LinkedList.contains(13));
console.log(LinkedList.find(13));
LinkedList.toString()
LinkedList.insertAt(14, 3);
LinkedList.toString()
LinkedList.removeAt(4);
LinkedList.toString();
*/