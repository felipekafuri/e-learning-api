### **Funcionalidades**

### **1. Autenticação**

[] A autenticação feita utilizando JWT. 
[] Validação dos dados

### 2**. Gestão de cursos**

Você precisa permitir que cursos sejam mantidos (cadastrados/atualizados) na aplicação, estas serão rotas **autenticadas** onde apenas usuários autenticados podem acessa-la

Os cursos possuirão os **seguintes** **campos:** 

- id
- name (Nome do curso)
- image (O caminho para a imagem)

Utilize uma tabela no banco de dados chamada `courses` para guardar informações do curso.

O cadastro de cursos só pode ser feito por administradores autenticados na aplicação.

Para essa gestão, você terá uma rota para a criação de um curso, e uma rota para update, que ficarão da seguinte forma:

```tsx
**POST "/courses" // Cria um novo curso
PUT "/courses/:id" // Atualiza um curso existente**
```

### 3**. Gestão de aulas**

Você deve permitir que aulas sejam mantidas (cadastradas/atualizadas) na aplicação, estas serão  rotas **autenticadas** onde apenas usuários autenticados podem acessa-la. Para isso, você deve criar uma tabela `lesson` que possuirá os **seguintes campos:** 

- id
- name (Nome da aula)
- duration (Duração em segundos da aula)
- course_id (Curso que está relacionado)
- description (Decrição da aula)
- video_id (id do vídeo)

**Dica:** Para o id do vídeo, utilize sempre o id da plataforma que você irá utilizar. Por exemplo para um vídeo do youtube com a URL `https://www.youtube.com/watch?v=wHzpWi3FxI8`, o id seria **wHzpWi3FxI8.**

Para essa gestão, você terá uma rota para a criação de um curso, e uma rota para update, que ficarão da seguinte forma:

```tsx
**POST "/lessons" // Cria uma nova aula em um curso
PUT "/lessons/:id" // Atualiza uma aula existente**
```

### 4**. Listagem de cursos**

Para que o usuário possa visualizar os cursos disponíveis na plataforma, você deverá criar uma rota que será acessada para fazer essa busca no seu banco de dados. Um exemplo de rota:

```tsx
GET **"/courses" // Exibe todos os cursos cadastrados no banco de dados**
```

### 5**. Listagem de aulas**

Para que o usuário possa visualizar as aulas disponíveis na plataforma, você deverá criar uma rota que será acessada para fazer essa busca no seu banco de dados. Um exemplo de rota:

```tsx
GET **"/courses/:id/lessons" // Exibe todas as aulas de um curso específico**
```

Além disso, essa rota deve receber um parâmetro no Header, como se você estivesse enviando um token. Esse token será o endereço MAC do dispositivo do usuário. Esse id, será utilizado para fazer um relacionamento entre as aulas, e as aulas concluídas por um usuário.