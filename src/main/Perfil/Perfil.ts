import { RespuestaCampoVariable } from "../Campos/RespuestaCampoVariable";
import { Dominio } from "../Dominio";
import { TipoPerfil } from "./TipoPerfil";

export class Perfil{
    private nombre: String;
    private descripcion: String;
    private foto: String;
    private dominio: Dominio;
    private tipoPerfil: TipoPerfil; 
    private respuestas: RespuestaCampoVariable[];
}