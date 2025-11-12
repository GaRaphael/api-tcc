"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMultiple = exports.uploadSingle = void 0;
const multer_1 = __importDefault(require("multer"));
// Configuração do multer para upload em memória
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limite
    },
    fileFilter: (req, file, cb) => {
        // Verificar se é uma imagem
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        }
        else {
            cb(new Error('Apenas arquivos de imagem são permitidos!'));
        }
    },
});
exports.uploadSingle = upload.single('image');
exports.uploadMultiple = upload.array('images', 5);
exports.default = upload;
//# sourceMappingURL=upload.js.map