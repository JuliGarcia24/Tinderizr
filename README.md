## CODIGO UML

@startuml

class Perfil{
 private nombre: String;
 private descripcion: String;
 private foto: String;
 private dominio: Dominio;
 private tipoPerfil: TipoPerfil; 
 private respuestas: RespuestaCampoVariable[]
}

class Dominio{
  private nombre: String;
  private vinculacion: tipoVinculacion;
  cantidadPersonas: number;
  tiposPerfiles: TipoPerfil[];
  campoVariable: CampoVariable[];
}

class Mensaje{
}

class TipoPerfil{
 private nombre: String;
}

class CampoVariable{
 private nombre: String;
 private esObligatorio: boolean; 
 private campos: PosibleValor[];
}

class PosibleValor{
 private valor: String;
}

class RespuestaCampoVariable{
 campoVariable: CampoVariable;
 private posibleValor: PosibleValor;
}

class Like{
 dePerfil: Perfil;
 aPerfil: Perfil;
 timeStamp: Date;
}

class Match{
 private likes: Like[];
 timeStamp: Date;
}

@enduml
