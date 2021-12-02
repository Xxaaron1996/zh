export class AttendanceList {
    constructor (list){
        this.list = list;
    }
    add(name){
        return this.list.fill(name);
    }
    place(name, index){
        return this.list[index] = name ;
    }
    has(name){
        return this.list.includes(name);
    }
    getlist(){
        return this.list;
    }
}