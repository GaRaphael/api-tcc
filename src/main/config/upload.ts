import multer, { FileFilterCallback } from 'multer';

// Configuração do multer para upload em memória
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limite
  },
  fileFilter: (req: Express.Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    // Verificar se é uma imagem
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Apenas arquivos de imagem são permitidos!'));
    }
  },
});

export const uploadSingle = upload.single('image');
export const uploadMultiple = upload.array('images', 5);

export default upload;