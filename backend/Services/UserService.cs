using System.Drawing;
using System.Drawing.Imaging;
using WebApplication1.Dtos.Craftsman.Settings;


namespace Backend.Services
{
    public class UserService : IUserService
    {


        public UserService()
        {

        }

       


        public async Task<bool> UpdateProfileImageAsync(UpdateProfileImageRequest request)
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
        }

       

       

       
    }
}