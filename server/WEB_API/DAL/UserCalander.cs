//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserCalander
    {
        public int idUserCalandar { get; set; }
        public Nullable<int> IdUser { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.DateTime> EntranceTime { get; set; }
        public Nullable<System.DateTime> LeavingTime { get; set; }
        public Nullable<int> NumWorkingHours { get; set; }
        public string Shift { get; set; }
    
        public virtual Employees Employees { get; set; }
    }
}
