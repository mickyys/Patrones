interface Button {
    render(a,b),
    onClick(f)
}

abstract class Dialog{
    
    abstract createButton();

    render(){
        let okButton = this.createButton();
        okButton.onClick('closeDialog');
        return okButton.render();
    }
}

class WindowsDialog extends Dialog{
    createButton() {
        return new WindowsButton();
    }    
}

class WebDialog extends Dialog{
    createButton() {
        return new HtmlButton();
    }    
}


class WindowsButton implements Button  {
    render(a: any, b: any) {
        throw new Error("Method not implemented.");
    } 
    
    onClick(f: any) {
        throw new Error("Method not implemented.");
    }
}

class HtmlButton implements Button{
    render(a: any, b: any) {
        throw new Error("Method not implemented.");
    }   
    onClick(f: any) {
        throw new Error("Method not implemented.");
    }   
}

class Application {
    dialog : Dialog;
    config = {
        OS : 'Windows'
    }

    initialize(){
        if (this.config.OS == "Windows") {
            this.dialog = new WindowsDialog();
        }            
        else if(this.config.OS == "Web") {
            this.dialog = new WebDialog()
        }            
        else{
            throw new Error("Error! Unknown operating system.")
        }           
    }

    main(){
        this.initialize()
        this.dialog.render()
    }
       
}
    