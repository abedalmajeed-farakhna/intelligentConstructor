using System.Drawing;
using System.Drawing.Imaging;

namespace Backend.Services
{
    public class UploadService : IUploadService
    {

        public UploadService()
        {

        }

        public async Task<string> SaveImageAsync(string imageBase64, string outputPath)
        {
            if (!IsBase64(imageBase64))
            {
                throw new Exception();
            }
            var imageData = imageBase64.Split(new string[] { "base64," }, StringSplitOptions.RemoveEmptyEntries);

            //we multiply with 1.37 because the final size of Base64-encoded binary data is equal to 1.37 times the original data size
            double maxImageSize = 4 * 1024 * 1024 * 1.37;

            if (Convert.ToInt64(imageData[1].Length) <= maxImageSize)
            {
                var imageType = imageData[0];
                var format = GetImageFormat(imageType);

                var filename = Path.GetRandomFileName() + "." + format.ToString().ToLower();
                var base64 = imageData[1];

                await Save(base64, outputPath, filename, format);

                return filename;
            }

            return string.Empty;
        }


        /*  public async Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request)
          {
              try
              {

                  var path = request.Image.Remove(0, 5);

                  FileStream formFile = new FileStream(request.Image, FileMode.Open);


                  if (formFile.Length > 0)
                  {
                      var filePath = Path.Combine("./Upload",
                          Path.GetRandomFileName());

                      using (var stream = File.Create(filePath))
                      {
                          await formFile.CopyToAsync(stream);
                      }
                  }


                  return true;
              }
              catch (Exception ex)
              {

                  var asd = ex.ToString();
                  return false;
              }
          }*/

        private async Task<bool> Save(string base64, string outputPath, string fileName, ImageFormat format)
        {
            try
            {
                var pathToSave = Path.Combine(outputPath, fileName);
                byte[] bytes = Convert.FromBase64String(base64);
                using (MemoryStream ms = new MemoryStream(bytes))
                {
                    var tempImage = Image.FromStream(ms);
                    tempImage.Save(pathToSave, format);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());

            }
            return true;
        }

        private ImageFormat GetImageFormat(string fileType)
        {
            if (fileType.Contains(ImageFormat.Png.ToString().ToLower()))
            {
                return ImageFormat.Png;
            }
            if (fileType.Contains(ImageFormat.Jpeg.ToString().ToLower()))
            {
                return ImageFormat.Jpeg;
            }
            if (fileType.Contains(ImageFormat.Bmp.ToString().ToLower()))
            {
                return ImageFormat.Bmp;
            }
            if (fileType.Contains(ImageFormat.Gif.ToString().ToLower()))
            {
                return ImageFormat.Gif;
            }

            return ImageFormat.Png;
        }

        private bool IsBase64(string image)
        {
            return image != null && image.Contains("data:");
        }
    }
}