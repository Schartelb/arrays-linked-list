function averageOfList(linkList){
    let current = linkList.head
    let val= 0
    while(current.next!== null){
        val +=current.val
        current = current.next
    }
    return val/linkList.length
}