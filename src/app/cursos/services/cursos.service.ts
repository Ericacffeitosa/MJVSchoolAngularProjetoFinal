import { Injectable } from '@angular/core';
import { Curso } from '../model/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  
  cursos: Array<Curso> = [
    {
      id:1,
      nome: 'Certificação Java',
      descricao: 'Curso preparatório para certificação Java OCA.',
      preco: 2500,
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-OjlSbySR_HW0OdUTNOceXyqcVe4BaBeA0PZA5gWPW9vnav-m4zjAXLlEUEN9F0t7eI&usqp=CAU"
    },
    {
      id: 2,
      nome: 'Angular',
      descricao: 'Aprenda as vantagens de um dos frameworks mais utilizados no mundo.',
      preco: 3000,
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEezfHtUZtwRrMzDvpV1eXlkhdJ2ZtRG_CrA&usqp=CAU"
    },
    {
      id: 3,
      nome: 'Html e Css',
      descricao: 'Crie páginas incríveis com as tecnologias da Web.',
      preco: 2000,
      imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACpCAMAAABEdevhAAABp1BMVEX4yxYmTuTjTib////s7OzzZCgAAAAqZfH5yxbiSCT/zgD30BWVkIIVR+b3zBUAAAPwjSH///wpXe/tXSjwZyjjTiMmTeb6697pXh3u7uvX4Pfw8PUmT+PyZSvS2vE8XtuouOnh7Pny19LpeEbotqUeW+XbSBwNPtOQeSJTRAm4miTzybWVfx/jQxZxYxgqZe/XsSDGpyClhhg/c+nhYEC3zPKHbBceGgWdiRcQCwAdFgduYBfnfR0lVub7xB/kZx3eUCzwmB/21SQsGADpxB9eRwhLNxfftC9HPQ9PRAdRSB48NRR/cBrdvitnWRcUCgc7KAM7LRSAcCZIQRm3oi+8miswLBYVAABgUh9vYifnxTOhjy6khi/IrjOOfR2lhRqYkHElTcX5uSFMYLFebaRyepiIiYp/gpDupReuo3S9rGTRuFfevkcmScw6WMNUZqxjc5z4wKLupYmasOztlXSKoOZ+oeLlxkNjfNn13eDkinbheGDoo5jcWzujnnt0k/O+rFrfbVTrVgDwg1tFdeFFWbnvu7TonXTsr4/51sB3eo9gZ6bJtk9g5efRAAAT5klEQVR4nO2diV8TSdrHOxyxOk1XTKCbhHSAIBBEIzLKKAqJsnl3HY91x5l5911233cUPECMN+OFo6Piev3R7/PU0V1JKiazuG7z+fTPK0enYn15qvo5qqsNI1KkSJEiRYoUKVKkSJEiRYoUKVKkSJEiRYoUKVKkSJEiRYoUKVKkSJEihUyEUvibGpQY7BF/kf2Bp5QGL362FYIN8A+yJ9gk/2P4z/gjeRQlHbUcHlGDCCIUH/uvE2JR9jIhlLTHBYcQZIUwLIrYCZVCdAwlHkHZv5R9A1G+bzeI0CXLohaIWMDH1xI88Z+Stn2C7kMzS0vUMgj/RNAUtSh/Bm8BqCX8QmRmLFm7y7Csg/GLyTjXYWt/Mp5ExZN/sKoX+avw7FDbPoEZ/Rc0s5+UyWH8xKzxx3igg9a38fjF+HEwLPg+fCExzb5wl9nVFKeDgP5knZGPk8doNXjjZAesrO/gyLMWScwyVvSc//FkfMo6j8/mq5RcYC9PWdN41OGv0cMvJoKs4nGfVRwNC3/kJ5aq+AZ7ljxE280sxLD2w4FnYbzN4oeAVVKaK2OFzcQvEfrnuLQrZLWbxiBBVrJLycMU7eriCdRf0K7iyflj8Hj+vGW0mbLArnD8gl1ZOAaB1fdxPpiRGLJiz2Zn47ud1fyl8+cvnb9UBVbx5A8/Tk//9NOPpIr4/jb90/RPP87STljB8f89NXXwELQBY/Dgt1NT8wDqh6mp87OcFbT9fXK3s7pI8SxoEXomLgfOX8GufJ3s1K7YSGOsEnhiPQafvcQa/hZJsfG421nNg0dkoS91Rk5XST5fibn5UEes+NzEZr/4LDpc1gl4cgjdKEuw4iB3NyuLO4ZgV2JyT57g50HewUO0nT8qxiCfoNh5EF9EuzqUwDeBVfLc/+D7fzuhsGJfit7pV+rvTiRZ/amKItbJM/v37z97DPp0wqqe2f/dmTNn57G/nbGC3p+4OD+fbMHqDPoLf1hGd475V3AU+9q2k2E45J8H2VA7TKb/Afr7D9hpSv7+j4Pw7FjndpWMn10y6P8yCjq7WjqYjE/TpM9KjPDjZDex4iep+AXrnHCImN8u559OWBl8vjoLDc62GIPxc9Q492eril/FxmBczG27hJUR2FUc7cr32+Pcb4/L+cpokxNg50H026lgZSE+zgpAAKs4sCKHLxCjgVU8/s3uQAWdnPJP5BAPnvHdhHnhtzOQbeNBsAzrOzjyjxbaFRuDMG0v/RUenkSrwXgw+T3FA9mP4P94PMht+Oddgsogs8e/Of4N6ufjVTp18hDTyZPfWtWT/pOf28eDljV98PjxaQBTPQ46jKzoN/AIvQeDzuKbLBND2dvkwnGpg7smgsakkhDFNIyUFTyh7XMyLEmFeSlqiaZY3opNczyRxfJh/PvQR6j71q/QzS8jKrOh+CBI0PEsH/+ng87gMSKDyoBRnvajMuimPM/HHuERxFC+6N/VtZ2JcCSqDCpeIcRQ/t9EPqbNgnfLVtAmErYM7iWJNDKhEpRsxrcfzByzI30Z8nu+EoQORb6IjwyjUukYpW0zNp20GTrHAX6oiS8iqmbmKbV2Lj5wQyRKqpf7voAuVwNWVnnvl9DpDrL6X1WULF2xv4CuLAfzlbVidpk7V8Wi4WIFftCqHWsr1/3suzF7VRkupOx07VzmghWyChjMLFc7YNVGnntVYUXLGac9rZZHiM+ae63W/+3/iCBsu9ae1WetCmXfVVmRTCd2AwMVfnU1/uO/fzpcMzv2K3F953YVs2/Usaooff79Ena1Fjb/ClhdbsvKS39Gi4xVXyKYWyjtgFX/Z+RwVkbYWBmJdbvN1B3z9nxGacbqssrKWmiDyuly8gMtlXdwhJorIXOvkNXN4o5YMbtybyoTMaV727EynXxva6FdmU7oWBGDbHg7ZuUWN1S/nZ7uwK5ao8pzVuWQoYJ+JW7V3B2z8m5ZaptrO2CV56y6MiRsy7HgP7R8xSflYrebULkaVjPsF4odX7tQZ1f1rE45zei0rPhrA3k8wKzQsLGCnlVv+6y8mNaX8gSWBlZ7AlZXqmq36IqpeJowOYF/Wa+u/gENqwGGa6CffaxitUvpf22BOViril25OsXS2tEX2JW7vaSEI4SuqE650+Sjmy3sqjePrw4wnwFDnJAJ03JBkON6tWKs2KwJrTgx/Jx9py4LRsv9pmJWpjnZrIxODKBgtTdsKRlkZX2w5dzu2XPDOhV0GuKwcODad+tWekKQ47Nyjo5pNajTvVCzIgaFIMcTrNzicE9Wo26NUgXGiruiN+pyfRDkmP4J73k2l831NCqna7L7wCuE1c+scS2Ec7uBQY7Paq6pVygtK2ZXM5xVX0tWXacGe7IdNtl971U+xKzgP5S46Y9B1x7V9UvPam5ixrer9UR9qwsBq8mxXIesUt33M9Jt7zJX2pa2v7oosV7a/onQftA5q9H0jAxx7JsJJdClhiWCHIez0hmWltXDDHfb8WMrsiYWHoGhbxR9T8rebJ5aWrF6wFkh5+LLBK1jJYIctJDSgVy2U1avRTiIrMqdXHHwlUXpLc/jbiiMwc2OB0zqF+Z1sdNCcaN+vlIDwtJ40GS2Dat9vdKunPCFgyjy6EpgV491p8FsisEB4T+S1WYa3VHmitZuJep8BjXIAVYSVK4nJ5HpT60V9NuBldnlVMKVaxeCgNCWUaB7ZEgn1a3y7eqxdNtd98py3dxCyYrC6r40pSdt/asB6TJAiBM+Vlhep9t2THhYrqvx2ovFRfDSF7lic3LAHPHdK3e7Skgdq7LC6qlwr7L3S+38dhYP9mMAaS6EcQgaxLojgxxXX4aA2BliZRAMuomhlGA1wlnhZ1Yt1a4Am1L1cp4Js8ptlbp4EN0qz4D5GGTF3PbQleiZEnfdz1dq1JzMREGwys0EbvtHqz7GUSs5zm9yDI6XZPqhdV40L8YgZxU+20rcaFPTCljN7JnICVZBiOPa1xrKnljJ8Vk9l2e/tyVpbZ/Ni/bj++bpsBWduRJ9tibD14LVSLdgNaSwuq66DGyRUCUIniHI4RordXXManItdCkZpsSvwOpzpqWOwSPyPDg34c9X9uWEGruhE6lUcpwxyWqyE1Z5R7AK3wAEYUDIJyxA5mlyfd6eIDH6WNrVKGO16LkQea8nrHpWxl7TL9OXBKvsk0llxm8AhOrlmVF2kLMSTrsiG0XpXmEKS2NXQV40/UI4o6kH7DmGg14MQhyj3q5Ux12yGjwFk7uUzqQG8n5lIpxuO7C6VfTdq9jEiEZHAj2Qfvsmd0VZiuJTwlBjN8FKWFHprYxwnh0NtE+jAcTFxqCZCSur5ZqoEMKAepzTKIjYuuUQTL2Q4aDr1h5ZRh0qoy7I2ZKsMIb2w6ZmDe7rH+gVrCqh9K5A1dtisNme+0YTPDd0TLASIY6HIY5l1J0IqaEGOVvCb8/mZNtZbewsQhzmilbC6TIYZGlbTlKePaJLyuji3DczaWZXXszerhKjLh6EgNBx/DH4VJe70LQ4mBcuQ5dpLlghZQVBjpjcPbdW6IgVhIMzMiXj3qnWt0d5kCNZPdO0qLWrzG5gdTeoTnhDnSXmcjP+GLSvNvtCZTXI6TAl9v4VeAwDIsQJ59RuGNaNwFEoDnc2YESI4wFkDHFU4ep2UvFLz87RweYWdaxYFUewCmmIY1CrT4xBD6teulyfMq3LEGcxCHFuJJra9Cs5cE573sgKzodKk36j48gqz1mthdSuKP3VT8p4xTnN5B6YU0o+GE6zihe69XafhtWCUpkf7GnwQXpyTfVBaPgdY+WYGDqHbgGkEKXrMsZxPXtztFlzvoZl1+YkKxi2682s6F7/POiY99+ON+mArzH5Q7if8Vk5K2FlRTb8aMZ2dSv9F/3VoS/8cJCxWgRWrv2ymRVWcgQrs6ukkZ8LfXUPjQpbfSirg04IF6pJJT55MeG3exg7N66WCdbJpDdliPOLzypmf9LYFbJS0lWNa4qcvFTmgJiuUq8HfFb9YSujSlHyqCYTWKzUwNb5uUFOS8nJyHCwG0KcmRlemSg+aj5nYZAT1J59RJqcTOa9nApZxatXLur7D4DoQHVL+2KxxZq36NVitUVd/mpU2tWL9AyveIH7uqxhtWI6PqtTQs9PlTSsBuUUqIY44WVV3fZXjLojhVyhUOgpFB4Um1lNzKVErfANZ+XCFHdlSc9KGJFpPs0ODmazT54MPnWaWQ0MivOgGg4uhDV0hhPhnYDVYgHP8OBUzelYDXcLVkcYK+YybGviEapUckpPecE5m9syNazQxcLJHUIcvzIR1hAHOpZQl/YVWOakJzdclBUwhVVB2FVuBFml2eR2p3lqB1sNJnbzt6xgNa4Zg/u4O5rqfq+wCt9CNSmaCIIc1x3GnEk21zOECWXPZ4XVQWAl5mER4risiqNllQmm9qM8bMrmeCXHCVgN9A68TglX9IAfOkOIE2K76gtYFYdZv3p6Cp6sWHC7QlgjOT5eurGKM7MHXVHPvq4xAUrrlvZxVj1vxSSmsOp9Ld32ewqrtZCGg5gfXw+CZ1su7cuN1LNiVRy2/AP6hm77DLrtdkwX4kCjSvAsq17ZsckGVvnezD9llPNOYbUS0hFosKV9AatRMblkb9u2Ogb3pCcW38i86BxOVywcbFrUJxpdkDZkOpNjwlSfmCVW3wnmq8yrdzIe/Gfdor6wwiIJdbkaX9oHfw2Nbo4UbbwKDEGlJ478MleQrugoYwVuu+faN3X9Uq5fcmQlp6dnbPzp81LJNE2nH7i8yux791622P1QuqKOY5bDOgahYxtBLdXeDJaWZXPDo49HYm568ciLuUK3361U9y/pmfQMDwdjG1pWatVLVnJgYGcHx7aePcd4cN/994MpP8cDIY6spLKFamE9DxoUr1+SrB5n5ZpFnrwqzG0+GPLXqomJeFO4omBY3i0tK7+S43SVxuvTV7knb7fGA06C1b6AVYaE1q4IhSDHd0bfBNWWXI4Dkym5IIsVVLxitWUtqxWF1VZPo3JBU3UhjrhuKbxWRejSbVduLOCOKOs7s/6CRQUVdvBNGsv2HmZSb1d1PQuuyXHQcW9UNlXfpFqZYBWvkMLCzSxXbf8iwokcH4Touyt50VQAKsUX9c2wa3HcVd0yKWKVu+R5EKtePMrxl4uqqVbxG1nl836IE9JBCOdn62pwPYA3nMuyZda5HjlxKb3ivwpsUZ+8bknTJrByAla/jWX5cPZb7BHcg+IsuO15ySq8IQ5uY3/Nv84kZhePbM4Vssy4crnArkS9OdU99OCNcE3R97Kv6uIRUre0r+vUs60xRh9bzCqs+I9g8P39fYhKViZOh5eVUbdJg4dp5NqbB8O5HnlGDGygMPpiZDEt8qRpxuqGfvVPUMlBJ2CyVDr1bHyMn1kDVvhn8N3rzKvePC4nGvBZhWx7lEDguCsBIS7BgojYLo6AT8WveeAndXAejkwgpxmFFYQ4eh+bVhqv3C2Vun7bejvIlyVzVoMHHu7LsPINv4I3qHiFlRXMLuvNy65c5PWGDcdUKjf04DFwStddzcurg7/qQhwYQ5pNGhwTzWtrbBB8hhQbeK8yDYv62Idwu4HQwrJeapaouayoXKw9HpUG1SBx3RLVnLNIy00aHKc0efTp+L2HA6zMPNDAih2yYhhhZQWD6JN2XTum8rAWzWYovsC9iZW7oRuDxGixSQMzHMCVwczeQK+8eL6eVZmGcLm2EMUgR2NYLr9cXFwLsKfRssTWDETri9K1SQ0sU7zWLxA1LLEVWzOUQ3fpoC/KghyNYcU8DyuHMn8V2BU+4tvu2LVHWreRkDVTPwjZOFTWIau4+LY7lVBeBsAFfvvybddrefGEZi+L9CLEN6w6eHtZy4rWbzzQwMrPXynI+vvlLmEVgxgh9dvRrqqrbusLArwmTv6RwKqqnYaB1WQHrCSmfqVIzUKcrw6hQ+E9qT7antdqW5mAFe53FaS6WFZ0FW+t1CxCypqtUTSsIK7xK9IsZ2p27bVCPAZhEH5gGdDWrNh14IuKRcW4B2Zf0+YEKKvktJqxJKt8r9gYLNgcBHe+OL2kPV2ERssvb6zWbNd2+YKGmAqF2VUaZ6cYrnlk9R0PQdVWr99cbpE/ocbK2gLDFSxjUB5hKbC/boUDB9VV2btWDvHcjrJowrp189q2xxLsnmsrNuahQcUYKht9VsbJu313/RbetUxfTqcW21Z75XRl0mTbGDpOHbZg4CFCNEAwqMoCcGrZZGiEO0dYCbK80fexhrmspouZRCYQoGFofbVvowqHG2zfcT0synfPNspreytoMepCmSbB2wunV/CMbPAb8YXZrtg9Xtiu6tbyzQ/bNdvWTV5s4G1/uLksULTeQlxcVor7kS9ZBIZjv1k/fckZCve4dTIw8NCeKM7qNOSo+MmQwSIkQau31u/i3r9stsdZii/Msu3bV3+FgYcbGVIG1/CpNDYnbsrIt68HBty8Gvd3An4ZMChC5b7kv+POmSERzF50+eV1mO1tPvxYTmv1+stlyi6r/L19YSSYeWXYXsesWoPzV+X0Sjl8e1b8LuGJyErAbL/+AavPLszk19YfWYkWc1NHLbLRRcsw2ztstgeDwoEX8nNee+FYwOWtaF6f+j5+7PtUtdhNTndygkJY7CZh5bWFSoUPPGaku5uVuLcG/8uywMT4rQ4Mw7+D7r8gRpvizVgp3ueEsPvYUmOX0xK3hCCCDxsnwX2H/8UmGRVxDwp+613W/m7mFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRInH9PznBK0bp7N7mAAAAAElFTkSuQmCC"
     },
    {
      id: 4,
      nome: 'Javascript',
      descricao: 'Conhecendo o Browser e padrões de projeto.',
      preco: 1500,
      imagem:"data:image/jpeg;base64,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"
    },
    {
      id: 5,
      nome: 'Arquitetura PHP',
      descricao: 'Modele seu projeto usando SOLID e padrões de projeto.',
      preco: 2500,
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQppjxZzwTKnr0ur1-QvBDGjg4juLGyarOkQ&usqp=CAU"
    },
    {
      id: 6,
      nome: 'Linguagem C++',
      descricao: 'Domine recursos essenciais de uma das principais linguagens no mercado.',
      preco: 2000,
      imagem:"data:image/jpeg;base64,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"
    },
    {
      id: 7,
      nome: 'Arduino',
      descricao: 'Aprenda mais sobre programação e eletrônica, com Arduino.',
      preco: 2000,
      imagem:"data:image/jpeg;base64,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"
     },
     {
      id: 8,
      nome: 'Lógica de Programação',
      descricao: 'Aborda fundamentos básicos de lógica de progarmação.',
      preco: 2000,
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6Xh5R9Myc8i0z6hwI5M3m8yuqw9J27y7Sw&usqp=CAU"
     }
  ];


  constructor() { }

  getCursos() {
    return this.cursos;
  }

  getById(id: number) {
    return this.cursos.find((cursos)=> cursos.id === id);
  }

}