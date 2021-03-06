# JsonApiDotNetCore Todo List Example

Demo application for [JsonApiDotNetCore](https://github.com/json-api-dotnet/JsonApiDotNetCore/).

[![Goto Playlist](https://img.youtube.com/vi/KAMuo6K7VcE/0.jpg)](https://www.youtube.com/watch?v=KAMuo6K7VcE&list=PLu4Bq53iqJJAo1RF0TY4Q5qCG7n9AqSZf)

## Usage

### Start the database

The app requires running postgres instance with credentials specified in appsettings.json.
One way to do this is run the database in a Docker container:

```sh
docker run --name TodoListSampleDb \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_DB=TodoList \
    -p 5432:5432 \
    -d postgres
```

### Starting the API


- `cd TodoListAPI`
- Run migrations: `dotnet ef database update`
- Set the environment to development: `export ASPNETCORE_ENVIRONMENT=development` (mac)
- `dotnet run`

### Starting the Client

- Install packges: `yarn`
- `ember s`
