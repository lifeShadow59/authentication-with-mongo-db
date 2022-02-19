import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class StartSwaggers {

    constructor(private readonly app: INestApplication) { }

    private readonly config = new DocumentBuilder()
        .setTitle('Authentication with mongo DB project')
        .setDescription('The Authentication with mongo DB project API description')
        .setVersion('1.0')
        .addTag('API')
        .build();
    private readonly document = SwaggerModule.createDocument(this.app, this.config);

    start() {
        SwaggerModule.setup('api', this.app, this.document);
    }
}