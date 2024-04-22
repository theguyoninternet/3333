const Fila = ()=> {
      let dados = [];
      inserir = valor => {
        dados.push(valor);
        imprimir();
      } //


      remover = () => {
        let removido = null;
        if(tamanho()>0){
         removido = dados[0];
         dados.splice(0,1);
        }  //
        imprimir();
        return removido;
        
      };

        tamanho = () => dados.length;
        imprimir = () => {
            if (document.getElementById('valor') == "") {
                alert("valor não valido");
                return false;
            };
            
            document.getElementById('saida_fila').innerHTML = dados;
        } //

    




      return {
        inserir,
        remover,
        tamanho,
        imprimir
      };
};
let fila = Fila();

document.querySelector("#btnInserir").onclick = function(){
    fila.inserir(document.getElementById('valor').value);
    document.getElementById('valor').value="";
    document.getElementById('valor').focus();
};      

document.querySelector("#btnInserir").onkeyup= function(e){
   if(e.keyCode == 13){
    fila.inserir(document.getElementById('valor').value);
    document.getElementById('valor').value="";
    document.getElementById('valor').focus();
   }//
};  

document.querySelector("#btnRemover").onclick = function(){
    document.getElementById('removido_fila').innerHTML = fila.remover();
}